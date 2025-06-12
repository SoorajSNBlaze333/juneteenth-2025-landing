import { Footer } from "../footer";
import { GenericTitle } from "./generic-title";

export const TitleFederalHoliday = () => {
  return (
    <div className="row-start-3 row-span-1 col-span-2 p-4 border-t-2 border-slate-100/20 flex flex-col justify-start items-end h-full w-full relative">
      <GenericTitle
        title="Federal Holiday in the US"
        subtitle="June 19, 2021"
      />
      <Footer />
    </div>
  );
};
