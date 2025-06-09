import { motion } from "motion/react";
import { Quote } from "./quote";
import { quotesContainer, quotesItem } from "../utils/variants";

export const TexasHoliday = () => {
  return (
    <motion.section
      variants={quotesContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 md:gap-6 px-4 md:p-0"
      style={{ maxWidth: "600px" }}
    >
      <Quote animationKey="highlight-1" variants={quotesItem}>
        In 1980, Texas officially declared June 19 a state holiday through
        legislation, becoming the first state to recognize Juneteenth as an
        official day of observance.
      </Quote>
      <Quote animationKey="highlight-2" variants={quotesItem}>
        Texas State Representative Al Edwards championed the bill, often called
        the “father of the Juneteenth holiday,” and played a critical role in
        pushing for formal recognition.
      </Quote>
      <Quote animationKey="highlight-3" variants={quotesItem}>
        The designation marked a significant acknowledgment of the historical
        and cultural importance of African American freedom and perseverance in
        Texas.
      </Quote>
      <Quote animationKey="highlight-4" variants={quotesItem}>
        This 1980 milestone helped spark broader awareness and momentum,
        ultimately influencing other states — and later, the federal government
        — to follow suit.
      </Quote>
    </motion.section>
  );
};
