import { motion } from "motion/react";

export const GenericTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.2,
        type: "spring",
        bounce: 0.05,
        damping: 9.5,
      }}
      className="text-white"
    >
      <p className="text-7xl 2xl:text-8xl font-bold text-right">{title}</p>
      <p className="text-2xl 2xl:text-3xl font-semibold text-right">
        {subtitle}
      </p>
    </motion.div>
  );
};
