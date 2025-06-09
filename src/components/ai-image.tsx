import { motion } from "motion/react";
import epImage from "../assets/ep-ai.webp";
import ggImage from "../assets/gg-ai.webp";
import fjImage from "../assets/fj-ai.webp";
import texHolImage from "../assets/tex-hol-ai.webp";
import allHolImage from "../assets/all-hol-ai.webp";
import loadingImage from "../assets/loading-ai.webp";

export const AiImage = ({ year }: { year: number }) => {
  const className = "max-w-52 rounded-lg border-[1px] border-amber-800";

  const renderImage = () => {
    if (year === 1863) {
      return (
        <motion.img
          key="ep-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
          src={epImage}
          className={className}
        />
      );
    } else if (year === 1865) {
      return (
        <motion.img
          key="gg-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
          src={ggImage}
          className={className}
        />
      );
    } else if (year === 1872) {
      return (
        <motion.img
          key="fj-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
          src={fjImage}
          className={className}
        />
      );
    } else if (year === 1980) {
      return (
        <motion.img
          key="tex-hol-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
          src={texHolImage}
          className={className}
        />
      );
    } else if (year === 2021) {
      return (
        <motion.img
          key="all-hol-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
          src={allHolImage}
          className={className}
        />
      );
    }
    return (
      <motion.img
        key="loading-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        src={loadingImage}
        className={className}
      />
    );
  };

  return <div className="hidden md:block">{renderImage()}</div>;
};
