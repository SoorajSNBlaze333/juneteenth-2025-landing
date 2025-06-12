import { motion } from "motion/react";
import texHolImage from "../../assets/section-4/tex-hol-ai.webp";
import alEdwardsImage from "../../assets/section-4/al-edwards.webp";
import alEdwardsBioImage from "../../assets/section-4/al-edwards-bio.webp";
import alEdwardsSpeech from "../../assets/section-4/al-ed-speech.webp";
import { TitleHolidayTexas } from "../titles/title-holiday-texas";
import { TexasHoliday } from "../quotes/texas-holiday";
import { quotesItem } from "../../utils/variants";
import { QuotesContainer } from "../misc/quotes-container";
import { Quote } from "../misc/quote";

export const HolidayTexas = () => {
  return (
    <>
      <div className="border-r-2 border-slate-100/20 row-start-1 row-span-2 col-start-1 col-span-1 p-4 flex justify-end items-end">
        <QuotesContainer>
          <Quote
            variants={quotesItem}
            animationKey="albert-edwards"
            image={alEdwardsBioImage}
          >
            The late Albert Ely Edwards, born March 19, 1937 and known as the
            Father of Juneteenth, was the catalyst for Juneteenth becoming a
            federal holiday now celebrated by Americans across the country.
            Edwards understood how important it was for the emancipation of
            enslaved Black Americans to be recognized on a national scale and he
            knew the necessity of raising awareness of this painful chapter of
            American history borne by African Americans.
          </Quote>
        </QuotesContainer>
      </div>
      <TitleHolidayTexas />
      <div className="border-t-2 border-r-2 border-slate-100/20 row-start-3 row-span-1 col-start-1 col-span-1 p-4 flex justify-end items-start">
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
          src={texHolImage}
          className="h-[80%] rounded-lg"
        />
      </div>
      <div className="border-t-2 border-slate-100/20 row-start-3 row-span-1 col-start-2 col-span-1 p-4 flex justify-center items-start">
        <div className="h-[80%] rounded-lg display flex justify-center items-center overflow-hidden">
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
            src={alEdwardsSpeech}
            className="mt-20"
          />
        </div>
      </div>
      <div className="border-l-2 border-slate-100/20 row-start-2 row-span-2 col-start-3 col-span-1 p-4 flex flex-col justify-start items-start gap-4">
        <TexasHoliday />
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-start items-center gap-6 w-full"
        >
          <div className="h-20 w-20 flex justify-center items-center rounded-xl overflow-hidden">
            <img alt="ae-image" className="w-20 mt-2" src={alEdwardsImage} />
          </div>
        </motion.section>
      </div>
    </>
  );
};
