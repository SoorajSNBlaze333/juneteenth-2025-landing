import { quotesItem } from "../../utils/variants";
import { Quote } from "../misc/quote";
import { QuotesContainer } from "../misc/quotes-container";

export const OtherYears = ({ year }: { year: number }) => {
  return (
    <QuotesContainer>
      <Quote animationKey="highlight-1" variants={quotesItem}>
        “Keep Scrolling to transition onto the next years.”
      </Quote>
      {year > 1900 && year < 1980 && (
        <Quote animationKey="highlight-1" variants={quotesItem}>
          “You are almost there! Just a little bit more.”
        </Quote>
      )}
    </QuotesContainer>
  );
};
