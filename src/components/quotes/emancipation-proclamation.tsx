import { quotesItem } from "../../utils/variants";
import { Quote } from "../misc/quote";
import { QuotesContainer } from "../misc/quotes-container";

export const EmancipationProclamation = () => {
  return (
    <QuotesContainer>
      <Quote animationKey="highlight-1" variants={quotesItem}>
        Signed on January 1, 1863, it declared that all enslaved people in
        Confederate-held territories were to be set free.
      </Quote>
      <Quote animationKey="highlight-2" variants={quotesItem}>
        The Proclamation reframed the Union’s war effort — from preserving the
        Union to fighting for human freedom and the abolition of slavery.
      </Quote>
      <Quote animationKey="highlight-3" variants={quotesItem}>
        It only applied to states in rebellion, not border states or Confederate
        areas already under Union control — freedom was symbolic and strategic,
        but not universal.
      </Quote>
      <Quote animationKey="highlight-4" variants={quotesItem}>
        It opened the door for over 180,000 African Americans to enlist in the
        Union Army and Navy, giving the fight for freedom literal force.
      </Quote>
    </QuotesContainer>
  );
};
