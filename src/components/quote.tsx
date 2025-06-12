import { motion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

export const Quote = ({
  children,
  variants,
  animationKey,
  image,
}: PropsWithChildren<{
  animationKey: string;
  variants?: Variants;
  image?: string;
}>) => {
  if (image) {
    return (
      <motion.div
        key={animationKey}
        variants={variants}
        className="border-2 border-white/15 bg-white/10 backdrop-blur-sm rounded-md cursor-pointer overflow-hidden max-w-80 flex flex-col justify-center items-start"
      >
        <motion.div className="h-60 flex justify-center items-center overflow-hidden relative">
          <img className="scale-120 mb-2" src={image} />
        </motion.div>
        <div className="text-xs 2xl:text-sm text-slate-100 p-2">
          <p className="m-0 border-l-2 border-green-300/70 pl-2">{children}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={animationKey}
      variants={variants}
      className="text-xs 2xl:text-sm text-slate-100 col-span-5 border-2 border-white/15 bg-white/10 backdrop-blur-sm p-2 rounded-md cursor-pointer"
    >
      <p className="m-0 border-l-2 border-green-300/70 pl-2">{children}</p>
    </motion.div>
  );
};
