import { motion } from "motion/react";

export const YearTitle = ({ year }: { year: number }) => {
  const className = "text-sm text-slate-200";

  if (year === 1863) {
    return (
      <motion.p
        key="Jan-1-1863"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className={className}
      >
        January 1, 1863
      </motion.p>
    );
  } else if (year === 1865) {
    return (
      <motion.p
        key="Jun-19-1865"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className={className}
      >
        June 19, 1865
      </motion.p>
    );
  } else if (year === 1872) {
    return (
      <motion.p
        key="Jun-19-1872"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className={className}
      >
        June 19, 1872
      </motion.p>
    );
  } else if (year === 1980) {
    return (
      <motion.p
        key="Jun-19-1872"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className={className}
      >
        June 19, 1980
      </motion.p>
    );
  } else if (year === 2021) {
    return (
      <motion.p
        key="Jun-19-1872"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className={className}
      >
        June 19, 2021
      </motion.p>
    );
  }
  return (
    <motion.p
      key="any-other-year"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className={className}
    >
      {year}
    </motion.p>
  );
};
