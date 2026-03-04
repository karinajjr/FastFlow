import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const [active, setActive] = useState<"ru" | "uz">("ru");
  const [bgStyle, setBgStyle] = useState({ width: 0, left: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const activeBtn = containerRef.current.querySelector<HTMLButtonElement>(
      `[data-lang="${active}"]`,
    );

    if (activeBtn) {
      setBgStyle({
        width: activeBtn.offsetWidth,
        left: activeBtn.offsetLeft,
      });
    }
  }, [active]);

  const changeLanguage = (lang: "ru" | "uz") => {
    setActive(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div
      ref={containerRef}
      className="relative hero-subtitle bg-white rounded-full flex items-center p-1 text-xs w-fit"
    >
      <div
        className="absolute top-1 bottom-1 bg-black rounded-full transition-all duration-300"
        style={{
          width: bgStyle.width,
          left: bgStyle.left,
        }}
      />

      <button
        data-lang="ru"
        onClick={() => changeLanguage("ru")}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${
          active === "ru" ? "text-white" : "text-black"
        }`}
      >
        RU
      </button>

      <button
        data-lang="uz"
        onClick={() => changeLanguage("uz")}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${
          active === "uz" ? "text-white" : "text-black"
        }`}
      >
        UZ
      </button>
    </div>
  );
}
