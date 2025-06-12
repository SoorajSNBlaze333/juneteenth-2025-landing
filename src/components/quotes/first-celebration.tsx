import { quotesItem } from "../../utils/variants";
import { ImageWrapper } from "../misc/image-wrapper";
import emancipationImage from "../../assets/section-3/emancipation-park.webp";
import { QuotesContainer } from "../misc/quotes-container";
import { Quote } from "../misc/quote";

export const FirstCelebration = () => {
  return (
    <QuotesContainer>
      <Quote animationKey="highlight-1" variants={quotesItem}>
        In 1872, African Americans in Texas organized the first formal
        Juneteenth celebrations to honor their newly recognized freedom after
        the reading of General Order No. 3 in 1865.
      </Quote>
      <ImageWrapper
        className="h-24 2xl:h-44  rounded-lg"
        description="The Emancipation Park - Houston."
        image={emancipationImage}
      />
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
