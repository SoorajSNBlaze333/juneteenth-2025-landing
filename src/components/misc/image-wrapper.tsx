import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const ImageWrapper = ({
  className,
  image,
  description,
  imageClassName,
}: {
  className: string;
  image: string;
  description?: string;
  imageClassName?: string;
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        type: "spring",
        bounce: 0.2,
        damping: 8,
      }}
      onMouseEnter={() => setOnHover(Boolean(description) && true)}
      onMouseLeave={() => setOnHover(false)}
      className={`${className} relative overflow-hidden z-30 flex justify-center items-center`}
    >
      <motion.img
        alt="image-wrapper-alt"
        src={image}
        className={`absolute scale-100 ${
          imageClassName ? imageClassName : "2xl:scale-125"
        }`}
      />
      <AnimatePresence initial={false}>
        {onHover && (
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.2,
              type: "spring",
              bounce: 0.2,
            }}
            className="absolute bottom-2 left-2 right-2 bg-black/35 backdrop-blur-sm p-2 text-xs font text-slate-300 border-2 border-white/10 rounded-lg"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
