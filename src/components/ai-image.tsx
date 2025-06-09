import { motion } from "motion/react";

export const AiImage = ({ year }: { year: number }) => {
  if (year === 1863) {
    return (
      <motion.img
        key="ep-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        src="/ep-ai.png"
        className="max-w-52 rounded-lg"
      />
    );
  } else if (year === 1865) {
    return (
      <motion.img
        key="go-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        src="/gg-ai.png"
        className="max-w-52 rounded-lg"
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
        src="/fj-ai.png"
        className="max-w-52 rounded-lg"
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
        src="/tex-hol-ai.png"
        className="max-w-52 rounded-lg"
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
        src="/all-hol-ai.png"
        className="max-w-52 rounded-lg"
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
      src="/loading-ai.png"
      className="max-w-52 rounded-lg"
    />
  );
};
