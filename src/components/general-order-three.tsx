import { motion } from "motion/react";
import { Quote } from "./quote";
import { quotesContainer, quotesItem } from "../utils/variants";

export const GeneralOrderThree = () => {
  return (
    <motion.section
      variants={quotesContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-3"
      style={{ maxWidth: "600px" }}
    >
      <Quote animationKey="highlight-1" variants={quotesItem}>
        General Order No. 3 marked the first formal announcement in Texas that
        all enslaved people were free — nearly 2.5 years after the Emancipation
        Proclamation.
      </Quote>
      <Quote animationKey="highlight-2" variants={quotesItem}>
        General Granger arrived in Galveston, Texas, with Union troops to
        enforce the order, bringing federal authority to the final Confederate
        state still practicing slavery.
      </Quote>
      <Quote animationKey="highlight-3" variants={quotesItem}>
        The reading of the order to newly freed people is what ultimately led to
        the celebration now known as Juneteenth, first observed in 1866 and
        commemorated annually.
      </Quote>
      <Quote animationKey="highlight-4" variants={quotesItem}>
        The order stated that freed people should remain at their present homes
        and work for wages — reflecting the government’s limited commitment to
        full economic liberation.
      </Quote>
    </motion.section>
  );
};
