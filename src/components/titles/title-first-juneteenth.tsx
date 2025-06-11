import { motion } from "motion/react";

export const TitleFirstJuneteenth = () => {
  return (
    <div className="row-start-1 row-span-1 col-span-2 p-4 border-b-2 border-slate-100/20 flex flex-col justify-end items-end h-full w-full">
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
        <p className="text-8xl font-bold text-right">
          First Juneteenth Celebrations
        </p>
        <p className="text-3xl font-semibold text-right">June 19, 1872</p>
      </motion.div>
    </div>
  );
};
