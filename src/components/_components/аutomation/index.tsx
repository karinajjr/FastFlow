import { useTranslation } from "react-i18next";

export default function Automation() {
  const { t } = useTranslation();

  return (
    <section
      id="automation"
      className="scroll-mt-28 relative overflow-hidden my-8 md:my-16 mx-auto container max-w-[950px] px-4"
    >
      <div className="flex gap-24 w-full items-end mb-2">
        <h2 className="hero-title text-2xl md:text-4xl font-black ">
          {t("аutomation.title_small")}
        </h2>

        <div className="gap-3 hidden md:flex items-end">
          <div className="bg-[#F0F0F0] w-56 h-15 rounded-full flex items-center justify-center px-4 gap-4">
            <span className="text-4xl text-black">
              {t("аutomation.reduction_percent")}
            </span>
            <span className="text-xs hero-subtitle leading-none whitespace-pre-line">
              {t("аutomation.reduction_text")}
            </span>
          </div>

          <div className="w-16 h-16 bg-[url('/bg-ai.svg')] bg-cover bg-center rounded-full flex items-center justify-center">
            <img src="/ai.svg" alt="Логотип" className="h-7 w-7" />
          </div>
        </div>
      </div>

      <h2 className="hero-title text-2xl md:text-4xl">
        {t("аutomation.main_title")}
      </h2>

      <div className="flex items-end">
        <div className="flex flex-col space-y-6">
          <p className="mt-3 md:mt-8 text-xs leading-relaxed text-gray-600 w-[310px] md:w-[445px]">
            {t("аutomation.description")}
          </p>

          <a href="#contact">
            <button className="w-40 md:w-32 h-10 bg-blue-600 text-white rounded-full hero-subtitle text-sm">
              {t("аutomation.button_apply")}
            </button>
          </a>
        </div>

        <div className="hidden md:block relative right-12 w-24 h-20 object-contain rounded-full bg-blue-600 flex items-center justify-center ">
          <img
            src="/logo/fast-flow-logo.svg"
            alt="Логотип"
            className="h-15 w-15 relative top-2 left-1"
          />
        </div>

        <div className="hidden md:block relative right-8">
          <div className="w-[400px] h-21 bg-blue-600 rounded-full flex items-center justify-center gap-4">
            <span className="text-white text-4xl hero-subtitle ml-2">
              {t("аutomation.saved_money")}
            </span>
            <span className="text-white text-xs hero-subtitle">
              {t("аutomation.saved_text")}
            </span>
          </div>

          <div className="bg-[#F0F0F0] w-48 h-20 flex justify-center items-center rounded-full">
            <span className="leading-none text-sm text-center font-medium whitespace-pre-line px-2">
              {t("аutomation.projects_info")}
            </span>
          </div>
        </div>
      </div>
      {/* адаптация */}
      <div className="h-80 block md:hidden">
        <div className=" relative bottom-12 gap-0 md:gap-3 flex md:hidden flex-col">
          <div className=" relative left-52 top-7 w-18 h-18 bg-[url('/bg-ai.svg')] bg-cover bg-center rounded-full flex items-center justify-center">
            <img src="/ai.svg" alt="Логотип" className="h-7 w-7" />
          </div>
          <div className=" bg-[#F0F0F0] w-80 h-18 rounded-full flex items-center justify-center gap-4">
            <span className="text-4xl text-black">
              {t("аutomation.reduction_percent")}
            </span>
            <span className="text-sm md:text-xs hero-subtitle leading-none whitespace-pre-line w-40 md:w-34">
              {t("аutomation.reduction_text")}
            </span>
          </div>
        </div>
        <div className="relative flex md:hidden flex-col items-center h-40 ">
          {/* 1 элемент (сзади сверху) */}
          <div className=" absolute bottom-28 left-0 z-0 w-full h-21 bg-blue-600 rounded-full flex items-center justify-center gap-4 px-4">
            <span className="text-white text-4xl hero-subtitle ml-2">
              {t("аutomation.saved_money")}
            </span>
            <span className="text-white text-xs hero-subtitle">
              {t("аutomation.saved_text")}
            </span>
          </div>

          {/* 2 элемент (главный) */}
          <div className="relative top-10  right-20 z-10 bg-[#F0F0F0] w-48 h-18 flex justify-center items-center rounded-full shadow-lg">
            <span className="text-sm leading-none text-center font-medium whitespace-pre-line px-2">
              {t("аutomation.projects_info")}
            </span>
          </div>

          {/* 3 элемент (сзади снизу) */}
          <div className="-rotate-12 absolute top-20 right-27  z-0 w-22 h-21 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <img
              src="/logo/fast-flow-logo.svg"
              alt="Логотип"
              className="h-15 w-15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
