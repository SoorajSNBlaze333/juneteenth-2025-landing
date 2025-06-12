import { motion } from "motion/react";
import epImage from "../assets/ep-ai.webp";
import ggImage from "../assets/gg-ai.webp";
import fjImage from "../assets/fj-ai.webp";
import texHolImage from "../assets/tex-hol-ai.webp";
import allHolImage from "../assets/all-hol-ai.webp";
import loadingImage from "../assets/loading-ai.webp";

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const exit = { opacity: 0 };
const transition = { duration: 0.4, type: "spring", bounce: 0.2 };

export const AiImage = ({ year }: { year: number }) => {
  const className = "h-full rounded-lg";

  if (year === 1863) {
    return (
      <motion.img
        key="ep-image"
        alt="emancipation-proclamation"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        src={epImage}
        className="h-full rounded-lg"
      />
    );
  } else if (year === 1865) {
    return (
      <motion.img
        key="gg-image"
        alt="general-order-3"
        // initial={initial}
        // animate={animate}
        // exit={exit}
        // transition={transition}
        src={ggImage}
        loading="lazy"
        className={className}
      />
    );
  } else if (year === 1872) {
    return (
      <motion.img
        key="fj-image"
        alt="first-celebration"
        // initial={initial}
        // animate={animate}
        // exit={exit}
        // transition={transition}
        src={fjImage}
        loading="lazy"
        className={className}
      />
    );
  } else if (year === 1980) {
    return (
      <motion.img
        key="tex-hol-image"
        alt="holiday-in-texas"
        // initial={initial}
        // animate={animate}
        // exit={exit}
        // transition={transition}
        src={texHolImage}
        loading="lazy"
        className={className}
      />
    );
  } else if (year === 2021) {
    return (
      <motion.img
        key="all-hol-image"
        alt="federal-holiday"
        // initial={initial}
        // animate={animate}
        // exit={exit}
        // transition={transition}
        src={allHolImage}
        loading="lazy"
        className={className}
      />
    );
  }
  return (
    <motion.img
      key="loading-image"
      alt="loading"
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      src={loadingImage}
      loading="lazy"
      className={className}
    />
  );
};
