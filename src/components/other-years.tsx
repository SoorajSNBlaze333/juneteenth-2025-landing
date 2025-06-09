import { motion } from "motion/react";
import { Quote } from "./quote";
import { quotesContainer, quotesItem } from "../utils/variants";

export const OtherYears = ({ year }: { year: number }) => {
  return (
    <motion.section
      variants={quotesContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
      style={{ maxWidth: "600px" }}
    >
      <Quote animationKey="highlight-1" variants={quotesItem}>
        “Keep Scrolling to transition onto the next years.”
      </Quote>
      {year > 1900 && year < 1980 && (
        <Quote animationKey="highlight-1" variants={quotesItem}>
          “You are almost there! Just a little bit more.”
        </Quote>
      )}
    </motion.section>
  );
};
