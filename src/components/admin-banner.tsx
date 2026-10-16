import { type FormEvent, useState } from "react";
import { toast } from "sonner";

const AdminBanner = () => {
  const [adminKey, setAdminKey] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim().length < 3) {
      toast.error("Lời nhắn phải có ít nhất 3 ký tự.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/banner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({
          message: message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Không thể cập nhật");
      }

      toast.success("Đã cập nhật lời nhắn trên banner.");
      setMessage("");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Đã xảy ra lỗi.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#071014] px-4 py-16 text-white">
      <div className="mx-auto max-w-lg rounded-2xl border border-white/[0.08] bg-[#0a1419] p-7 shadow-2xl sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2dd4bf]">
          ADMIN
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Cập nhật Top Banner
        </h1>

        <p className="mt-3 text-secondary">
          Trang quản trị dành cho admin sử dụng trên điện thoại.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col gap-2">
            <span>Mật khẩu quản trị</span>

            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              autoComplete="current-password"
              required
              className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 outline-none transition focus:border-[#2dd4bf]/55"
              placeholder="Nhập mật khẩu"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Lời nhắn mới</span>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              maxLength={300}
              required
              className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 outline-none transition focus:border-[#2dd4bf]/55"
              placeholder="Nhập nội dung muốn hiển thị..."
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-[#2dd4bf] px-6 py-3 font-semibold text-[#041113] transition hover:bg-[#5eead4] disabled:opacity-50"
          >
            {loading ? "Đang cập nhật..." : "Cập nhật banner"}
          </button>
        </form>

        <a
          href="/"
          className="mt-6 inline-block text-sm text-white/45 transition hover:text-[#5eead4]"
        >
          ← Quay về trang chủ
        </a>
      </div>
    </main>
  );
};

export default AdminBanner;
