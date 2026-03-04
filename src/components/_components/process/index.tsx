import { useTranslation } from "react-i18next";

export default function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="scroll-mt-28 space-y-[70px]">
      <div className="my-5 md:my-20 ml-5 md:ml-10 bg-black rounded-tl-[52px] md:rounded-tl-[72px] rounded-bl-[72px] text-white pl-[30px] md:pl-[60px] py-[40px] md:py-[70px] space-y-[69px]">
        <div className="gap-2 md:gap-16 flex justify-between">
          <div className="space-y-6">
            <p className="hero-subtitle text-sm md:text-base text-[#B5ED3D] mb-14">
              {t("process.subtitle")}
            </p>
            <h2 className="hero-title text-2xl md:text-5xl font-bold">
              {t("process.title")}
            </h2>
            <p className="hero-subtitle text-sm md:text-base">
              {t("process.description")}
            </p>
            <button className="bg-[#0A6AEB] rounded-full w-[140px] h-[40px] flex justify-center items-center text-sm">
              {t("process.button_apply")}
            </button>
          </div>

          <div className="flex items-end justify-end md:gap-6">
            <div className="hidden lg:block w-[160px] h-[300px] flex flex-col justify-between items-center rounded-full p-8 space-y-8 bg-[linear-gradient(to_top,#523FFF,#FFFFFF,#2C18E5_0%,#5442F4_47%,#5442F5_100%)]">
              <div className="space-y-4">
                <img
                  src="/process/lock-icn.svg"
                  alt="Логотип"
                  className="h-24 w-32"
                />
                <p className="text-base text-center">
                  {t("process.secure_system")}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 hero-subtitle">
                <div className="bg-[#523FFF] w-24 h-1.5 rounded-full"></div>
                <div className="bg-[#523FFF] w-28 h-1.5 rounded-full"></div>
                <div className="bg-[#523FFF] w-22 h-1.5 rounded-full"></div>
              </div>
            </div>

            <div className="relative right-0 w-[150px] md:w-[240px] overflow-hidden">
              <div className="bg-[#313131] w-52 md:w-[274px] h-80 md:h-[391px] rounded-full -rotate-20 translate-x-9 md:translate-x-10">
                <img
                  src="/process/process-grope.svg"
                  alt="Логотип"
                  className="absolute top-[45px] right-[3px] w-24 md:w-[117px] h-[200px]"
                />

                <div className="absolute top-[85px] right-[50px] w-24 md:w-[117px] h-[200px] rounded-2xl bg-[linear-gradient(to_bottom,#4D9DFF_0%,#5442F4_43%,#2C18E5_100%)]"></div>

                <div className="absolute top-[115px] right-[90px] w-24 md:w-[117px] h-[200px] rounded-2xl bg-[linear-gradient(to_bottom,#262729_0%,#1E1F21_32%,#101010_100%)] py-6 px-3 grid grid-cols-2 gap-2 z-30">
                  {[
                    "letter-icn.svg",
                    "not-under-icn.svg",
                    "bell-icn.svg",
                    "flag-icn.svg",
                    "medal-icn.svg",
                    "cloud-icn.svg",
                  ].map((icon) => (
                    <div
                      key={icon}
                      className="border-2 border-[#313131] w-[40px] h-[40px] rounded-full flex justify-center items-center"
                    >
                      <img
                        src={`/process/${icon}`}
                        className="h-[20px] w-[20px]"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Шаги */}
        <div className="mt-30 flex flex-col md:flex-row gap-3 w-full md:pr-0 pr-4">
          {["1", "2", "3", "4"].map((num) => (
            <div
              key={num}
              className="relative flex-1 flex justify-center items-center"
            >
              <div
                className={`bg-[#1F2123] rounded-full w-full ${num === "1" ? "h-22" : "h-24"} flex justify-center items-center`}
              >
                <p className="hero-subtitle text-white text-base leading-snug font-light">
                  {t(`process.steps.${num}`)}
                </p>
              </div>
              <div className="absolute -top-7 left-2 flex items-center">
                <span className="text-white text-4xl font-bold leading-none">
                  {num.padStart(2, "0")}
                </span>
                <span className="w-3 h-3 bg-[#B5ED3D] rounded-full ml-2 mt-9" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Результаты */}
      <div className="mx-auto container max-w-[950px] py-5 pl-6 flex gap-0 md:gap-4">
        <div className="space-y-4">
          <h2 className="hero-title text-2xl md:text-5xl font-bold w-[290px] md:w-[590px] lg:w-[590px]">
            {t("process.result_title")}
          </h2>
          <p className="hero-subtitle text-xs w-[250px] md:w-[590px]">
            {t("process.result_description")}
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-6">
            <div className="w-64 md:w-44 h-14 bg-[#B5ED3D] text-sm flex justify-center items-center rounded-full">
              {t("process.result_items.accelerate")}
            </div>
            <div className="w-64 md:w-44 h-14 border border-2 text-sm flex justify-center items-center rounded-full">
              {t("process.result_items.reduce_errors")}
            </div>
            <div className="w-64 md:w-44 h-14 bg-[#0A6AEB] text-white text-sm flex justify-center items-center rounded-full">
              {t("process.result_items.team_focus")}
            </div>
          </div>
        </div>

        {/* Декоративные круги справа */}
        <div className="flex items-end justify-center gap-0 md:gap-3">
          <div className="relative bottom-25 md:bottom-0 w-[100px] md:w-[140px] h-[241px] overflow-hidden">
            <div className="w-[140px] h-[241px] bg-black rounded-full flex justify-center items-center">
              <div
                className="rounded-full border-transparent border-4 gap-16 flex flex-col"
                id="process-circle"
              >
                <div className="bg-[#B5ED3D] w-14 h-14 rounded-full flex justify-center items-center relative z-10">
                  <img
                    src="/logo/fast-flow-black.svg"
                    alt="Логотип"
                    className="w-12 h-12"
                  />
                </div>
                <div className="bg-[#5846FB] w-14 h-14 rounded-full flex justify-center items-center relative z-10">
                  <img src="ai.svg" alt="Логотип" className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-[190px] h-[250px] rounded-full bg-[linear-gradient(to_top,#2C18E5_0%,#5442F4_47%,#5442F5_100%)] flex-col justify-center items-center py-2 space-y-14">
            <img
              src="/process/pattern-icn.svg"
              alt="Логотип"
              className="h-[140px] w-[140px]"
            />
            <img
              src="/process/process-t-icn.svg"
              alt="Логотип"
              className="h-[62px] w-[65px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
