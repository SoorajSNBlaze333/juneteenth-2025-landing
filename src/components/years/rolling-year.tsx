import { AnimatePresence, motion } from "motion/react";

const ROLLING_OFFSET = 20;

export const RollingYear = ({
  year,
  direction,
}: {
  year: number;
  direction: number;
  size?: string;
}) => {
  return (
    <div className="font-bold flex justify-center items-center gap-2 z-50">
      {year
        .toString()
        .split("")
        .map((val, index) => (
          <div
            key={index}
            className="relative h-28 2xl:h-36 w-20 2xl:w-26 rounded-lg border-2 bg-white/10 backdrop-blur-sm border-white/15 text-white overflow-hidden text-8xl 2xl:text-9xl font-bold flex justify-center items-center"
          >
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
                  duration: 0.3,
                  type: "spring",
                  damping: 9,
                  bounce: 0.5,
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
