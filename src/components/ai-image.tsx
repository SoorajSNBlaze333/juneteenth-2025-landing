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
  const className =
    "max-w-52 rounded-lg border-[1px] border-amber-800 hidden md:block";

  if (year === 1863) {
    return (
      <motion.img
        key="ep-image"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        src={epImage}
        loading="lazy"
        className={className}
      />
    );
  } else if (year === 1865) {
    return (
      <motion.img
        key="gg-image"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        src={ggImage}
        loading="lazy"
        className={className}
      />
    );
  } else if (year === 1872) {
    return (
      <motion.img
        key="fj-image"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        src={fjImage}
        loading="lazy"
        className={className}
      />
    );
  } else if (year === 1980) {
    return (
      <motion.img
        key="tex-hol-image"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        src={texHolImage}
        loading="lazy"
        className={className}
      />
    );
  } else if (year === 2021) {
    return (
      <motion.img
        key="all-hol-image"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        src={allHolImage}
        loading="lazy"
        className={className}
      />
    );
  }
  return (
    <motion.img
      key="loading-image"
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
