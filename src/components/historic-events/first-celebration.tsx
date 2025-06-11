import { Quote } from "../quote";
import { quotesItem } from "../../utils/variants";
import { QuotesContainer } from "../quotes-container";
import { motion } from "motion/react";
import emancipationImage from "../../assets/emancipation-park.png";

export const FirstCelebration = () => {
  return (
    <QuotesContainer>
      <Quote animationKey="highlight-1" variants={quotesItem}>
        In 1872, African Americans in Texas organized the first formal
        Juneteenth celebrations to honor their newly recognized freedom after
        the reading of General Order No. 3 in 1865.
      </Quote>
      <motion.div
        variants={quotesItem}
        className="h-44 overflow-hidden flex justify-center items-center rounded-lg"
      >
        <motion.img
          alt="first-juneteenth-celebrations-ticket"
          src={emancipationImage}
        />
      </motion.div>
      <Quote animationKey="highlight-2" variants={quotesItem}>
        A group of formerly enslaved Black community leaders in Houston pooled
        $800 to purchase Emancipation Park, a dedicated space for Juneteenth
        gatherings and future celebrations.
      </Quote>
      <Quote animationKey="highlight-3" variants={quotesItem}>
        The celebrations featured barbecues, prayer services, music, speeches,
        and games — reflecting a blend of African American traditions,
        resilience, and hope.
      </Quote>
      <Quote animationKey="highlight-4" variants={quotesItem}>
        The 1872 gathering laid the foundation for Juneteenth to become an
        annual cultural and political tradition, even as Black Americans faced
        Reconstruction-era injustices.
      </Quote>
    </QuotesContainer>
  );
};
