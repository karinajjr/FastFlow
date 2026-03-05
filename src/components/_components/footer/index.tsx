import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;

    // Перекидывание в Telegram-канал
    const tgLink = `tg://resolve?domain=fastflow_uz&text=Мой email: ${encodeURIComponent(email)}`;
    window.location.href = tgLink;

    // Очищаем поле
    setEmail("");
  };

  const navItems = t("footer.nav", { returnObjects: true }) as string[];

  return (
    <div className="bg-black">
      <div className="mx-auto container max-w-[950px] text-white pt-20 py-6 px-4 lg:px-0 space-y-3 md:space-y-36">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="hero-title text-2xl md:text-5xl font-bold whitespace-pre-line">
            {t("footer.title_top")}
          </h1>
          <h1
            className="hero-title relative right-3 inline-block text-2xl md:text-5xl font-bold bg-[#B5ED3D] rounded-full py-2 md:py-4 px-2 md:px-3 text-black"
            id="pod-kluch-clip"
          >
            {t("footer.highlight")}
          </h1>
          <h1 className="hero-title text-2xl md:text-5xl font-bold whitespace-pre-line">
            {t("footer.title_bottom")}
          </h1>

          <div className="relative w-80 mt-6">
            <input
              type="email"
              placeholder={t("footer.input_placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-full w-full h-16 text-black placeholder-gray-400 px-6 pr-32 text-2xl border-2 border-gray-300 hover:border-[#B5ED3D] transition-colors"
            />
            <button
              onClick={handleSubmit}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#0A6AEB] text-black rounded-full h-11 w-11 text-xl hover:bg-white hover:border-white transition-colors flex items-center justify-center"
              aria-label={t("footer.button_alt")}
            >
              <img
                src="/footer/arrow-icn.svg"
                alt={t("footer.button_alt")}
                className="h-4 w-7"
              />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="hidden md:flex items-center justify-center gap-2">
              <img
                src="/logo/fast-flow-logo.svg"
                alt="Логотип"
                className="h-16 w-auto"
              />
              <h2 className="text-xl">FastFlow</h2>
            </div>
            <div className="hidden md:flex hero-subtitle justify-between items-center px-6 gap-6 text-base">
              {navItems.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </div>

          <div className="border-t w-full border-white" />

          <div className="text-center flex items-center justify-center pt-4">
            <h1 className="text-lg md:text-base">{t("footer.copyright")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
