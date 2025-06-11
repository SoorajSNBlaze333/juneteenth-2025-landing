import { motion } from "motion/react";
import fjImage from "../../assets/fj-ai.webp";
import fjImageCelebrations from "../../assets/fj-old.jpg";
import { TitleFirstJuneteenth } from "../titles/title-first-juneteenth";
import { FirstCelebration } from "../historic-events/first-celebration";

export const FirstJuneteenthCelebration = () => {
  return (
    <>
      <TitleFirstJuneteenth />
      <div className="border-r-2 border-slate-100/20 row-start-2 row-span-2 col-start-1 col-span-1 p-4 flex justify-end items-start">
        <FirstCelebration />
      </div>
      <div className="border-l-2 border-slate-100/20 row-start-1 row-span-2 col-start-3 col-span-2 p-4 flex justify-start items-end">
        <motion.img
          alt="emancipation-proclamation"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.2,
            delay: 0.1,
            type: "spring",
            bounce: 0.2,
            damping: 8,
          }}
          src={fjImage}
          className="h-[80%] rounded-lg"
        />
      </div>
      <div className="border-t-2 border-slate-100/20 row-start-3 row-span-1 col-start-2 col-span-2 p-4 flex justify-start items-start gap-4">
        <motion.img
          alt="first-juneteenth-celebrations"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.2,
            delay: 0.1,
            type: "spring",
            bounce: 0.2,
            damping: 8,
          }}
          src={fjImageCelebrations}
          className="h-full rounded-lg sepia-50"
        />
      </div>
    </>
  );
};
