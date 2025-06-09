import type { PropsWithChildren } from "react";
import { quotesContainer } from "../utils/variants";
import { motion } from "motion/react";

export const QuotesContainer = ({ children }: PropsWithChildren) => {
  return (
    <motion.section
      variants={quotesContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 md:gap-6 px-4 md:p-0"
      style={{ maxWidth: "600px" }}
      id="emancipation-proclamation"
    >
      {children}
    </motion.section>
  );
};
