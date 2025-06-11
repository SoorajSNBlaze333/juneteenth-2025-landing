import { GeneralOrderThree } from "../historic-events/general-order-three";
import { TitleGeneralOrder } from "../titles/title-general-order";
import { motion } from "motion/react";
import ggImage from "../../assets/gg-ai.webp";
import gordonImage from "../../assets/gordon.jpg";
import galvestonDailyImage from "../../assets/gd.webp";
import ggNewsImage from "../../assets/gg-news.jpg";

export const GeneralOrder = () => {
  return (
    <>
      <div className="border-r-2 border-slate-100/20 row-start-1 row-span-2 col-start-1 col-span-1 p-4 flex justify-end items-end">
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
          src={ggImage}
          className="h-[80%] rounded-lg"
        />
      </div>
      <div className="border-b-2 border-slate-100/20 row-start-1 row-span-1 col-start-2 col-span-1 p-4 flex justify-center items-end">
        <div className="h-[80%] w-full overflow-hidden flex justify-center items-center rounded-xl">
          <motion.img
            alt="general-order-news"
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
            src={ggNewsImage}
            className="rounded-lg sepia-50"
          />
        </div>
      </div>
      <div className="border-l-2 border-slate-100/20 row-start-1 row-span-2 col-start-3 col-span-1 p-4 flex flex-col-reverse justify-start items-end">
        <GeneralOrderThree />
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-start items-center gap-6 w-full py-2"
        >
          <div className="h-20 w-20 flex justify-center items-center rounded-xl overflow-hidden">
            <img className="w-20 mt-2" src={gordonImage} />
          </div>
        </motion.section>
      </div>
      <TitleGeneralOrder />
      <div className="border-l-2 border-t-2 border-slate-100/20 row-start-3 row-span-1 col-start-3 col-span-1 p-4 flex justify-start items-start">
        <motion.img
          alt="galveston-daily"
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
          src={galvestonDailyImage}
          className="h-[80%] rounded-lg"
        />
      </div>
    </>
  );
};
