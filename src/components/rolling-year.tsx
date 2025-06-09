import { AnimatePresence, motion } from "motion/react";

const ROLLING_OFFSET = 15;

export const RollingYear = ({
  year,
  direction,
}: {
  year: number;
  direction: number;
  size?: string;
}) => {
  return (
    <div className="font-bold flex justify-center items-center gap-1">
      {year
        .toString()
        .split("")
        .map((val, index) => (
          <div className="relative h-18 w-12 rounded-lg bg-slate-800 text-white shadow-md overflow-hidden text-5xl font-bold flex justify-center items-center">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                initial={{
                  y: direction > 0 ? ROLLING_OFFSET : -ROLLING_OFFSET,
                  opacity: 0,
                }}
                animate={{ y: 0, opacity: 1 }}
                exit={{
                  y: direction > 0 ? -ROLLING_OFFSET : ROLLING_OFFSET,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  bounce: 0.4,
                }}
                key={index.toString().concat(val)}
                className="absolute"
              >
                {val}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
    </div>
  );
};
