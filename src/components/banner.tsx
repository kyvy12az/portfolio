import { useEffect, useState } from "react";

type BannerResponse = {
  message: string;
  updatedAt?: string;
};

const DEFAULT_MESSAGE =
  "Chào mừng bạn đến với website của Kỳ Vỹ!";

const Banner = () => {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  useEffect(() => {
    const loadBanner = async () => {
      try {
        const response = await fetch("/api/banner");

        if (!response.ok) {
          throw new Error("Không thể tải banner");
        }

        const data: BannerResponse = await response.json();

        if (data.message) {
          setMessage(data.message);
        }
      } catch (error) {
        console.error("[BANNER_ERROR]", error);
      }
    };

    loadBanner();

    const timer = window.setInterval(loadBanner, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="top-banner" role="status">
      <div className="top-banner-track">
        <span>📢 {message}</span>
        <span aria-hidden="true">📢 {message}</span>
      </div>
    </div>
  );
};

export default Banner;