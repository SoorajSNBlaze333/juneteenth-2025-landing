import { motion } from "motion/react";

export const TitleFederalHoliday = () => {
  return (
    <div className="row-start-3 row-span-1 col-span-2 p-4 border-t-2 border-slate-100/20 flex flex-col justify-start items-end h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          type: "spring",
          bounce: 0.05,
          damping: 9.5,
        }}
        className="text-white"
      >
        <p className="text-7xl 2xl:text-8xl font-bold text-right">
          Federal Holiday in the US
        </p>
        <p className="text-2xl 2xl:text-3xl font-semibold text-right">
          June 19, 2021
        </p>
      </motion.div>
    </div>
  );
};
