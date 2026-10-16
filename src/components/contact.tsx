import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validate form on submit
  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    type Current = {
      name: boolean;
      email: boolean;
      message: boolean;
    };

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current["name"] = false;
    } else {
      nameError.classList.add("hidden");
      current["name"] = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // valiate email
    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError.classList.remove("hidden");
      current["email"] = false;
    } else {
      emailError.classList.add("hidden");
      current["email"] = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current["message"] = false;
    } else {
      messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current],
    );
  };

  // handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Không thể gửi thông điệp");
      }

      toast.success(result.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("[CONTACT_ERROR]", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Đã xảy ra lỗi khi gửi thông điệp.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div className="grid items-stretch gap-8 overflow-hidden lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="rounded-2xl border border-white/[0.08] bg-[#0a1419] p-6 sm:p-9"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>06 · Liên hệ</p>
          <h3 className={`${styles.sectionHeadText} mt-4`}>Cùng tạo nên điều thú vị.</h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/45">
            Bạn có ý tưởng, dự án hoặc chỉ muốn gửi một lời chào? Tin nhắn sẽ
            được chuyển trực tiếp đến điện thoại của tôi.
          </p>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-9 flex flex-col gap-6"
          >
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="mb-2 text-sm font-medium text-white/75">Tên của bạn</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                title="Tên của bạn là gì?"
                disabled={loading}
                aria-disabled={loading}
                className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2dd4bf]/55 disabled:opacity-50"
              />

              {/* Invalid Name */}
              <span className="text-red-400 mt-2 hidden" id="name-error">
                Tên không hợp lệ!
              </span>
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="mb-2 text-sm font-medium text-white/75">Email của bạn</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nguyenvana@email.com"
                title="Email của bạn là gì?"
                disabled={loading}
                aria-disabled={loading}
                className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2dd4bf]/55 disabled:opacity-50"
              />

              {/* Invalid Email */}
              <span className="text-red-400 mt-2 hidden" id="email-error">
                Email không hợp lệ!
              </span>
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="mb-2 text-sm font-medium text-white/75">Thông điệp</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Xin chào!"
                title="Bạn muốn nói gì?"
                disabled={loading}
                aria-disabled={loading}
                className="resize-none rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2dd4bf]/55 disabled:opacity-50"
              />

              {/* Invalid Message */}
              <span className="text-red-400 mt-2 hidden" id="message-error">
                Tin nhắn không hợp lệ!
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Đang gửi..." : "Gửi"}
              className="w-fit rounded-lg bg-[#2dd4bf] px-7 py-3.5 text-sm font-semibold text-[#041113] outline-none transition hover:-translate-y-0.5 hover:bg-[#5eead4] disabled:cursor-not-allowed disabled:opacity-40"
              disabled={loading}
              aria-disabled={loading}
            >
              {/* check loader state */}
              {loading ? "Đang gửi..." : "Gửi"}
            </button>
          </form>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="min-h-[360px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] lg:min-h-full"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
