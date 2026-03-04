import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;

    const tgLink = `tg://resolve?domain=fastflow_uz&text=Мой email: ${encodeURIComponent(email)}`;

    window.location.href = tgLink;

    setEmail("");
  };

  return (
    <section id="contact" className="scroll-mt-28 flex flex-col">
      <div className="mx-auto container max-w-[1000px] -mb-46 z-10 ">
        <div className="bg-[#F1F4F8] rounded-4xl w-full h-[400px] flex flex-col items-center justify-center space-y-10">
          <h1 className="text-4xl md:text-5xl text-center">
            {t("contact.title")}
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#E8E8E8] rounded-xl w-[335px] md:w-[505px] h-[53px] text-black placeholder-[#bebaba] px-8 text-xl border-none hover:border-[#B5ED3D] font-light"
          />

          <button
            onClick={handleSubmit}
            className="bg-[#B5ED3D] rounded-full text-xl flex items-center justify-center w-52 h-11"
          >
            {t("contact.button")}
          </button>
        </div>
      </div>
      <div className="bg-[#0A6AEB] w-full h-[305px] pb-11 flex justify-center items-end">
        <div className="gap-6 md:gap-11 flex justify-center items-center">
          <a
            href="https://instagram.com/fastflow.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <img
              src="/contact/instagram-icn.svg"
              alt="Instagram"
              className="w-11 h-11 md:w-12 md:h-12 block"
            />
            <img
              src="/contact/white-instagram-icn.svg"
              alt="Instagram"
              className="w-11 h-11 md:w-12 md:h-12 absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          <a
            href="https://t.me/fastflow_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <img
              src="/contact/telegram-icn.svg"
              alt="Telegram"
              className="w-11 h-11  block"
            />
            <img
              src="/contact/white-telegram-icn.svg"
              alt="Telegram"
              className="w-11 h-11 absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          <a
            href="https://t.me/fastflow_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <img
              src="/contact/linkidin-icn.svg"
              alt="LinkedIn"
              className="w-11 h-11 block"
            />
            <img
              src="/contact/white-linkidin-icn.svg"
              alt="LinkedIn"
              className="w-11 h-11 absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          <a href="https://t.me/fastflow_uz" className="relative">
            <img
              src="/contact/gmail-icn.svg"
              alt="Gmail"
              className="w-12 h-12  block"
            />
            <img
              src="/contact/white-gmail-icn.svg"
              alt="Gmail"
              className="w-12 h-12  absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          <a href="tel:+998970977807" className="relative">
            <img
              src="/contact/phone-icn.svg"
              alt="Phone"
              className="w-11 h-11 block"
            />
            <img
              src="/contact/white-phon-icn.svg"
              alt="Phone"
              className="w-11 h-11 absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
