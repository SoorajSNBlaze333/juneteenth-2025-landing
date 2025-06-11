import { AnimatePresence, motion } from "motion/react";
import { type PropsWithChildren } from "react";

export const SnapSection = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="snap-center h-screen w-full grid grid-cols-3 grid-rows-3"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
