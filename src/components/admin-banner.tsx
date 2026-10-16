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
    <main className="min-h-screen bg-primary px-4 py-12 text-white">
      <div className="mx-auto max-w-lg rounded-2xl bg-black-100 p-8 shadow-xl">
        <p className="text-sm uppercase tracking-widest text-accent">
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
              className="rounded-lg bg-tertiary px-4 py-3 outline-none"
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
              className="rounded-lg bg-tertiary px-4 py-3 outline-none"
              placeholder="Nhập nội dung muốn hiển thị..."
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-accent text-primary px-6 py-3 font-bold hover:bg-accent-hover disabled:opacity-50"
          >
            {loading ? "Đang cập nhật..." : "Cập nhật banner"}
          </button>
        </form>

        <a
          href="/"
          className="mt-6 inline-block text-accent hover:underline"
        >
          ← Quay về trang chủ
        </a>
      </div>
    </main>
  );
};

export default AdminBanner;