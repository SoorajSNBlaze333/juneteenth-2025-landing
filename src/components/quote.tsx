import { motion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

export const Quote = ({
  children,
  variants,
  animationKey,
}: PropsWithChildren<{ animationKey: string; variants?: Variants }>) => {
  return (
    <motion.div
      key={animationKey}
      variants={variants}
      className="text-xs md:text-sm text-slate-200 col-span-5 border-[1px] border-slate-500 bg-gray-700 shadow-md p-2 rounded-md cursor-pointer"
    >
      <p className="m-0 border-l-2 border-green-300/70 pl-2">{children}</p>
    </motion.div>
  );
};
