import { motion } from "motion/react";

export const TitleGeneralOrder = () => {
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
        <p className="text-8xl font-bold text-right">General Order No. 3</p>
        <p className="text-3xl font-semibold text-right">June 19, 1865</p>
      </motion.div>
    </div>
  );
};
