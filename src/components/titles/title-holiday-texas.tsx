import { motion } from "motion/react";

export const TitleHolidayTexas = () => {
  return (
    <div className="row-start-1 row-span-1 col-start-2 col-span-2 p-4 border-b-2 border-slate-100/20 flex flex-col justify-end items-start h-full w-full">
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
        <p className="text-7xl 2xl:text-8xl font-bold text-left">
          First Holiday in Texas
        </p>
        <p className="text-2xl 2xl:text-3xl font-semibold text-left">
          Jan 1, 1980
        </p>
      </motion.div>
    </div>
  );
};
