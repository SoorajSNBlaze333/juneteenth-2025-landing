import { motion } from "motion/react";
import { Quote } from "./quote";
import { quotesContainer, quotesItem } from "../utils/variants";

export const FederalHoliday = () => {
  return (
    <motion.section
      variants={quotesContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 md:gap-6 px-4 md:p-0"
      style={{ maxWidth: "600px" }}
    >
      <Quote animationKey="highlight-1" variants={quotesItem}>
        On June 17, 2021, President Joe Biden signed the Juneteenth National
        Independence Day Act, making June 19 an official U.S. federal holiday.
      </Quote>
      <Quote animationKey="highlight-2" variants={quotesItem}>
        Juneteenth became the first new federal holiday since Martin Luther King
        Jr. Day was established in 1983 — marking a major recognition of African
        American history.
      </Quote>
      <Quote animationKey="highlight-3" variants={quotesItem}>
        The holiday commemorates June 19, 1865, when enslaved people in Texas
        finally learned of their freedom — more than two years after the
        Emancipation Proclamation.
      </Quote>
      <Quote animationKey="highlight-4" variants={quotesItem}>
        The bill passed with overwhelming bipartisan support, signaling a shared
        commitment to acknowledging the historical significance of Juneteenth.
      </Quote>
    </motion.section>
  );
};
