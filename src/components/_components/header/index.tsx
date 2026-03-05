import { useEffect, useState, useRef } from "react";
import LangSwitcher from "../../language/lang-switcher";
import { useTranslation } from "react-i18next";
import CountUp from "./count/count-up";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");
  const [bgStyle, setBgStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true); // старт анимации сразу при загрузке
  }, []);

  const links = [
    { id: "about", label: t("nav.about") },
    { id: "automation", label: t("nav.automation") },
    { id: "services", label: t("nav.services") },
    { id: "process", label: t("nav.process") },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const activeEl = containerRef.current.querySelector(
      `a[data-id="${active}"]`,
    ) as HTMLElement;
    if (activeEl) {
      setBgStyle({ width: activeEl.offsetWidth, left: activeEl.offsetLeft });
    }
  }, [active, i18n.language]);

  return (
    <div className="min-h-screen bg-black bg-[url('/bg/bg-header.svg')] bg-cover bg-center flex flex-col rounded-none md:rounded-b-[60px]">
      <header className="text-white px-6 mx-auto container max-w-[1000px] flex flex-col flex-1">
        {/* NAV */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
            scrolled
              ? "bg-black/10 shadow-lg backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Лого */}
              <div className="flex items-center gap-2">
                <img
                  src="/logo/fast-flow-logo.svg"
                  alt="Логотип"
                  className="h-8 md:h-10"
                />
                <h2 className="text-sm md:text-base xl:text-xl">FastFlow</h2>
              </div>

              {/* Меню с плавающим фоном */}
              <div
                ref={containerRef}
                className="relative hero-subtitle hidden md:flex bg-white rounded-full text-black items-center px-4 py-2  text-sm"
              >
                {/* Плавающий фон */}
                <div
                  className="absolute top-0 left-0 bg-black rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: bgStyle.width,
                    height: "70%",
                    top: "15%",
                    transform: `translateX(${bgStyle.left}px)`,
                  }}
                ></div>

                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    data-id={link.id}
                    onClick={() => setActive(link.id)}
                    className={`relative px-3 py-1.5 text-sm transition-colors duration-500 ease-in-out`}
                    style={{
                      zIndex: 10,
                      color: active === link.id ? "white" : "black",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Переключатель языка */}
              <LangSwitcher />
            </div>
          </div>
        </nav>

        {/* Hero секция */}
        <section
          id="about"
          className="flex flex-1 flex-col items-center justify-center text-center gap-3 mt-24"
        >
          <h1 className="hero-title text-2xl md:text-4xl lg:text-5xl">
            {t("hero.title1")}
          </h1>

          <div className="hero-title flex flex-col md:flex-row justify-center gap-4 text-2xl md:text-4xl lg:text-5xl">
            <h2>{t("hero.title2")}</h2>
            <h2 className="hero-title text-black bg-[#B5ED3D] w-full px-3 py-1 rounded-full">
              {t("hero.title3")}
            </h2>
          </div>

          <p
            style={{ whiteSpace: "pre-line" }}
            className="hero-subtitle text-sm"
          >
            {t("hero.description")}
          </p>

          <a href="#contact">
            <button className="flex justify-center items-center bg-[#0A6AEB] px-12 md:px-8 py-4 md:py-2.5 rounded-full text-sm my-5">
              {t("hero.button")}
            </button>
          </a>
        </section>

        {/* Статистика */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-15 mx-9">
          <div className="hero-subtitle flex items-center justify-center gap-3 bg-[#1F2123] rounded-full px-6 py-5">
            <span className="text-4xl text-white">
              +{start ? <CountUp from={0} to={40} duration={2} /> : 0}%
            </span>
            <p className="whitespace-pre-line text-white/70 text-xs">
              {t("stats.efficiency")}
            </p>
          </div>

          <div className="hero-subtitle flex items-center justify-center gap-6 bg-[#1F2123] rounded-full px-3 lg:px-4 py-5">
            <div className="hero-subtitle flex items-end gap-3">
              <span className="text-xl">{t("stats.uchun")}</span>
              <span className="text-4xl text-white">
                {start ? <CountUp from={0} to={70} duration={2} /> : 0}%
              </span>
            </div>
            <p className="hero-subtitle whitespace-pre-line text-white/70 text-xs">
              {t("stats.manual")}
            </p>
          </div>

          <div className="hero-subtitle flex items-center justify-center gap-6 bg-[#1F2123] rounded-full px-2 lg:px-4 py-5">
            <span className="text-4xl text-white">
              {start ? <CountUp from={0} to={24} duration={2} /> : 0}/
              {start ? <CountUp from={0} to={7} duration={2} /> : 0}
            </span>
            <p className="hero-subtitle whitespace-pre-line text-white/70 text-xs">
              {t("stats.autopilot")}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
