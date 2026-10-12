import "dotenv/config";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, "data");
const BANNER_FILE = path.join(DATA_DIR, "banner.json");
const DIST_DIR = path.join(__dirname, "dist");

app.use(
    helmet({
        contentSecurityPolicy: false,
    }),
);

app.use(express.json({ limit: "10kb" }));

const messageLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    message: {
        success: false,
        message: "Bạn gửi quá nhanh. Vui lòng thử lại sau.",
    },
});

async function ensureBannerFile() {
    await fs.mkdir(DATA_DIR, { recursive: true });

    try {
        await fs.access(BANNER_FILE);
    } catch {
        await fs.writeFile(
            BANNER_FILE,
            JSON.stringify(
                {
                    message: "Chào mừng bạn đến với website của Kỳ Vỹ!",
                    updatedAt: new Date().toISOString(),
                },
                null,
                2,
            ),
        );
    }
}

async function readBanner() {
    await ensureBannerFile();
    const content = await fs.readFile(BANNER_FILE, "utf-8");
    return JSON.parse(content);
}

/* Khách gửi thông điệp đến điện thoại */
app.post("/api/messages", messageLimiter, async (req, res) => {
    try {
        const name = String(req.body.name || "Khách").trim();
        const email = String(req.body.email || "").trim();
        const message = String(req.body.message || "").trim();

        if (message.length < 5 || message.length > 1000) {
            return res.status(400).json({
                success: false,
                message: "Thông điệp phải có từ 5 đến 1000 ký tự.",
            });
        }

        if (!process.env.BARK_URL) {
            throw new Error("Thiếu BARK_URL");
        }

        const barkResponse = await fetch(process.env.BARK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: `Tin nhắn mới từ ${name}`,
                body: email
                    ? `${message}\n\nEmail: ${email}`
                    : message,
                group: "portfolio-bt02",
                level: "active",
            }),
        });

        if (!barkResponse.ok) {
            const errorBody = await barkResponse.text();
            console.error("[BARK_ERROR]", errorBody);
            throw new Error("Bark từ chối yêu cầu");
        }

        const barkResult = await barkResponse.json();

        if (barkResult.code !== 200) {
            console.error("[BARK_ERROR]", barkResult);
            throw new Error(barkResult.message || "Bark gửi thất bại");
        }

        return res.json({
            success: true,
            message: "Thông điệp đã được gửi đến Kỳ Vỹ.",
        });
    } catch (error) {
        console.error("[MESSAGE_ERROR]", error);

        return res.status(500).json({
            success: false,
            message: "Không thể gửi thông điệp. Vui lòng thử lại.",
        });
    }
});

/* Trang chủ lấy lời nhắn banner mới nhất */
app.get("/api/banner", async (_req, res) => {
    try {
        const banner = await readBanner();
        res.json(banner);
    } catch (error) {
        console.error("[BANNER_READ_ERROR]", error);

        res.status(500).json({
            message: "Chào mừng bạn đến với website của Kỳ Vỹ!",
        });
    }
});

/* Admin cập nhật banner từ điện thoại */
app.post("/api/banner", async (req, res) => {
    try {
        const adminKey = req.header("x-admin-key");
        const message = String(req.body.message || "").trim();

        if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) {
            return res.status(401).json({
                success: false,
                message: "Mật khẩu quản trị không đúng.",
            });
        }

        if (message.length < 3 || message.length > 300) {
            return res.status(400).json({
                success: false,
                message: "Lời nhắn phải có từ 3 đến 300 ký tự.",
            });
        }

        const banner = {
            message,
            updatedAt: new Date().toISOString(),
        };

        await ensureBannerFile();
        await fs.writeFile(BANNER_FILE, JSON.stringify(banner, null, 2));

        res.json({
            success: true,
            message: "Đã cập nhật banner.",
            banner,
        });
    } catch (error) {
        console.error("[BANNER_UPDATE_ERROR]", error);

        res.status(500).json({
            success: false,
            message: "Không thể cập nhật banner.",
        });
    }
});

/* Phục vụ bản build React */
app.use(express.static(DIST_DIR));

/* Hỗ trợ truy cập trực tiếp /admin */
app.use((req, res, next) => {
    if (req.method === "GET") {
        return res.sendFile(path.join(DIST_DIR, "index.html"));
    }

    next();
});

await ensureBannerFile();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Website đang chạy tại http://0.0.0.0:${PORT}`);
});