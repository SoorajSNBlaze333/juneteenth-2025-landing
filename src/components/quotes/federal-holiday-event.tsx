import { quotesItem } from "../../utils/variants";
import { Quote } from "../misc/quote";
import { QuotesContainer } from "../misc/quotes-container";

export const FederalHolidayEvent = () => {
  return (
    <QuotesContainer>
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
    </QuotesContainer>
  );
};
