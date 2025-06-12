import celebrateImage from "../../assets/celebrate.jpg";
import juneteenthLawImage from "../../assets/juneteenth-law.jpg";
import juneteenthLogoImage from "../../assets/logo.jpg";
import { TitleFederalHoliday } from "../titles/title-federal-holiday";
import { FederalHolidayEvent } from "../quotes/federal-holiday-event";
import { ImageWrapper } from "../misc/image-wrapper";

export const FederalHoliday = () => {
  return (
    <>
      <div className="border-r-2 border-slate-100/20 row-start-1 row-span-2 col-start-1 col-span-1 p-4 flex justify-end items-end">
        <ImageWrapper
          className="w-64 h-96 rounded-lg"
          description="Juneteenth Celebrations - Freedom"
          image={celebrateImage}
          imageClassName="scale-250"
        />
      </div>
      <div className="border-b-2 border-slate-100/20 row-start-1 row-span-1 col-start-2 col-span-1 p-4 flex justify-center items-end">
        <ImageWrapper
          className="h-[80%] w-full rounded-lg"
          description="President Joe Biden signs the law - 2021"
          image={juneteenthLawImage}
          imageClassName="2xl:scale-100"
        />
      </div>
      <div className="border-l-2 border-slate-100/20 row-start-1 row-span-2 col-start-3 col-span-1 p-4 flex flex-col-reverse justify-start items-end">
        <FederalHolidayEvent />
      </div>
      <TitleFederalHoliday />
      <div className="border-l-2 border-t-2 border-slate-100/20 row-start-3 row-span-1 col-start-3 col-span-1 p-4 flex justify-start items-start">
        <ImageWrapper
          className="w-[80%] rounded-lg h-full"
          image={juneteenthLogoImage}
        />
      </div>
    </>
  );
};
