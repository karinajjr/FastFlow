import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

function ServiceCard({
  title,
  dotColor,
  description,
  className = "",
}: {
  title: string | ReactNode;
  dotColor: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-100 rounded-3xl px-5 py-7 shadow-[0_10px_40px_rgba(0,0,0,0.25)] h-56 w-full ${className}`}
    >
      <div className="flex justify-between items-start">
        <h2 className="text-2xl md:text-3xl mb-4 hero-subtitle leading-tight whitespace-pre-line">
          {title}
        </h2>
        <div
          className="w-8 h-8 rounded-full shrink-0"
          style={{ backgroundColor: dotColor }}
        ></div>
      </div>

      <p className="text-gray-600 text-sm hero-subtitle">{description}</p>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();

  const services = t("services.cards", { returnObjects: true }) as {
    title: string;
    dotColor: string;
    description: string;
  }[];

  return (
    <section
      id="services"
      className="scroll-mt-22 h-[1500px] lg:h-[900px] bg-[url('/bg/services-bg.svg')] bg-cover bg-center"
    >
      <div className="mx-auto container max-w-[900px] px-6 lg:px-0">
        <div className="relative py-12 flex flex-col gap-10">
          <div>
            <h1 className="hero-title text-2xl md:text-4xl leading-normal [word-spacing:11px] whitespace-pre-line">
              {t("services.title_top")}
            </h1>
            <div className="hidden md:block w-36 h-[1px] bg-black mt-6 ml-0 md:ml-40"></div>
          </div>

          <div className="block md:hidden absolute bottom-0 right-26 flex justify-center  items-center pointer-events-none">
            <div className="bg-[url('/ellipse.svg')] bg-cover bg-center  w-36 h-18 md:w-52 md:h-28 rounded-full  flex items-center justify-center text-base hero-subtitle">
              {t("services.button_center")}
            </div>
          </div>

          <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
            {" "}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#B5ED3D] flex items-center justify-center text-base hero-subtitle">
              {t("services.button_center")}
            </div>
          </div>

          <div className="absolute top-[170px] lg:top-[120px] right-0 text-right pr-4 md:pr-0">
            <h1 className="hero-title text-2xl md:text-4xl leading-normal whitespace-pre-line">
              {t("services.title_bottom")}
            </h1>
            <div className="hidden md:block w-40 h-[1px] bg-black mt-6 ml-auto"></div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-56 md:mt-36">
          {[0, 1, 2].map((col) => {
            const topIndex = col * 2;
            const bottomIndex = col * 2 + 1;

            return (
              <div className="relative" key={col}>
                <ServiceCard
                  title={services[topIndex].title}
                  dotColor={services[topIndex].dotColor}
                  description={services[topIndex].description}
                  className="shadow-xl"
                />

                <div className="absolute left-0 right-0 -bottom-16 lg:-bottom-45 z-20">
                  <ServiceCard
                    title={services[bottomIndex].title}
                    dotColor={services[bottomIndex].dotColor}
                    description={services[bottomIndex].description}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-28 md:mt-16 flex flex-col items-stretch lg:hidden relative">
          {services.map((card, index) => (
            <div
              key={index}
              className={index === 0 ? "relative" : "relative -mt-10"}
              style={{ zIndex: index + 1 }}
            >
              <ServiceCard
                title={card.title}
                dotColor={card.dotColor}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
