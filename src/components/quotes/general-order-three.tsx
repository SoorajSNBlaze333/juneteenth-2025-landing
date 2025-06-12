import { quotesItem } from "../../utils/variants";
import { Quote } from "../misc/quote";
import { QuotesContainer } from "../misc/quotes-container";

export const GeneralOrderThree = () => {
  return (
    <QuotesContainer>
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
    </QuotesContainer>
  );
};
