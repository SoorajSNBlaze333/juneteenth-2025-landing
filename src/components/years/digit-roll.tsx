import { motion, MotionValue, useTransform } from "motion/react";

const DIGITS = Array.from({ length: 10 }, (_, i) => i);

export const DigitRoll = ({
  index,
  yearString,
  direction,
}: {
  index: number;
  yearString: MotionValue<string>;
  direction: number;
}) => {
  const digit = useTransform(yearString, (value) => parseInt(value[index]));

  return (
    <div className="relative h-16 w-10 overflow-hidden rounded-md bg-zinc-800">
      <motion.div
        style={{
          y: useTransform(digit, (d) => -d * 64), // 64px height per digit
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 120,
        }}
      >
        {DIGITS.map((d) => (
          <div
            key={d}
            className="h-16 w-10 flex items-center justify-center text-white text-5xl"
          >
            {d}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
