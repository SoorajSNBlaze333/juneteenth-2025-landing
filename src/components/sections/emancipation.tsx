import { TitleEmancipation } from "../titles/title-emancipation";
import { motion } from "motion/react";
import epImage from "../../assets/ep-ai.webp";
import epImageOne from "../../assets/ep-1.jpg";
import epImageTwo from "../../assets/ep-2.jpg";
import abImage from "../../assets/ab.jpg";
import wsImage from "../../assets/ws.png";
import { EmancipationProclamation } from "../historic-events/emancipation-proclamation";
import { ImageWrapper } from "../misc/image-wrapper";

export const Emancipation = () => {
  return (
    <>
      <TitleEmancipation />
      <div className="border-l-2 border-t-2 border-slate-100/20 row-start-3 row-span-1 col-start-3 col-span-1 p-4 flex justify-start items-start">
        <a
          href="https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation"
          target="_blank"
        >
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.4,
              type: "spring",
              bounce: 0.2,
            }}
            className="border-2 border-white/15 bg-white/10 backdrop-blur-sm text-slate-100 hover:border-emerald-400/60 rounded-lg p-2 inline-flex justify-start items-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
            <p>Read the full Article here</p>
          </motion.button>
        </a>
      </div>

      <div className="border-r-2 border-slate-100/20 row-start-2 row-span-2 col-span-1 flex justify-end items-start p-4">
        <ImageWrapper
          className="h-[80%] w-72 rounded-lg"
          description="Ai's interpretation of The Emancipation Proclamation - 1863"
        >
          <motion.img
            alt="emancipation-proclamation-ai-image"
            src={epImage}
            className="absolute"
          />
        </ImageWrapper>
      </div>

      <div className="border-t-2 border-slate-100/20 row-start-3 row-span-1 col-start-2 col-span-1 flex justify-evenly items-start gap-6 p-4">
        <motion.img
          alt="emancipation-proclamation"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.2,
            delay: 0.2,
            type: "spring",
            bounce: 0.2,
            damping: 8,
          }}
          src={epImageTwo}
          className="h-full rounded-lg sepia-50"
        />
        <motion.img
          alt="emancipation-proclamation"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.2,
            delay: 0.3,
            type: "spring",
            bounce: 0.2,
            damping: 8,
          }}
          src={epImageOne}
          className="h-full rounded-lg"
        />
      </div>

      <div className="border-l-2 border-slate-100/20 row-start-1 row-span-2 col-start-3 col-span-1 flex flex-col-reverse justify-start items-end p-4">
        <EmancipationProclamation />
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-start items-center gap-4 w-full mb-4"
        >
          <div className="h-20 w-20 flex justify-center items-center rounded-xl overflow-hidden relative">
            <img className="w-20 mt-6 sepia-50" src={abImage} />
          </div>
          <div className="h-20 w-20 flex justify-center items-center rounded-xl overflow-hidden relative">
            <img className="w-20 mt-6 sepia-50" src={wsImage} />
          </div>
        </motion.section>
      </div>
    </>
  );
};
