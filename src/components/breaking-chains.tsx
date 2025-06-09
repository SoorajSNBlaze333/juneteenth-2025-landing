import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const renderChain = () => {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      id="Layer_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="rotate-45"
    >
      <g>
        <g>
          <path
            d="M35.521,41.288c-3.422,0-6.64-1.333-9.06-3.753c-1.106-1.106-1.106-2.9,0-4.006    c1.106-1.106,2.9-1.106,4.006,0c1.35,1.35,3.145,2.093,5.054,2.093c1.909,0,3.704-0.743,5.054-2.094l7.538-7.538    c2.787-2.787,2.787-7.321,0-10.108c-2.787-2.787-7.321-2.787-10.108,0l-3.227,3.227c-1.106,1.106-2.9,1.106-4.006,0    c-1.106-1.106-1.106-2.9,0-4.006L34,11.877c4.996-4.996,13.124-4.995,18.12,0c4.996,4.996,4.996,13.124,0,18.12l-7.538,7.538    C42.161,39.955,38.944,41.288,35.521,41.288z"
            fill="#e2e8f0"
          />
        </g>

        <g>
          <path
            d="M20.94,55.869c-3.422,0-6.64-1.333-9.06-3.753c-4.996-4.996-4.996-13.124,0-18.12l7.538-7.538    c4.996-4.995,13.124-4.995,18.12,0c1.106,1.106,1.106,2.9,0,4.006c-1.106,1.106-2.9,1.106-4.006,0    c-2.787-2.787-7.321-2.787-10.108,0l-7.538,7.538c-2.787,2.787-2.787,7.321,0,10.108c1.35,1.35,3.145,2.094,5.054,2.094    c1.909,0,3.704-0.743,5.054-2.093l3.227-3.227c1.106-1.106,2.9-1.106,4.006,0c1.106,1.106,1.106,2.9,0,4.006L30,52.117    C27.58,54.536,24.363,55.869,20.94,55.869z"
            fill="#e2e8f0"
          />
        </g>
      </g>
    </motion.svg>
  );
};

const renderCenterChain = () => {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      id="Layer_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="rotate-45"
    >
      <g>
        <g>
          <path
            d="M35.521,41.288c-3.422,0-6.64-1.333-9.06-3.753c-1.106-1.106-1.106-2.9,0-4.006    c1.106-1.106,2.9-1.106,4.006,0c1.35,1.35,3.145,2.093,5.054,2.093c1.909,0,3.704-0.743,5.054-2.094l7.538-7.538    c2.787-2.787,2.787-7.321,0-10.108c-2.787-2.787-7.321-2.787-10.108,0l-3.227,3.227c-1.106,1.106-2.9,1.106-4.006,0    c-1.106-1.106-1.106-2.9,0-4.006L34,11.877c4.996-4.996,13.124-4.995,18.12,0c4.996,4.996,4.996,13.124,0,18.12l-7.538,7.538    C42.161,39.955,38.944,41.288,35.521,41.288z"
            fill="#e7000b"
          />
        </g>

        <g>
          <path
            d="M20.94,55.869c-3.422,0-6.64-1.333-9.06-3.753c-4.996-4.996-4.996-13.124,0-18.12l7.538-7.538    c4.996-4.995,13.124-4.995,18.12,0c1.106,1.106,1.106,2.9,0,4.006c-1.106,1.106-2.9,1.106-4.006,0    c-2.787-2.787-7.321-2.787-10.108,0l-7.538,7.538c-2.787,2.787-2.787,7.321,0,10.108c1.35,1.35,3.145,2.094,5.054,2.094    c1.909,0,3.704-0.743,5.054-2.093l3.227-3.227c1.106-1.106,2.9-1.106,4.006,0c1.106,1.106,1.106,2.9,0,4.006L30,52.117    C27.58,54.536,24.363,55.869,20.94,55.869z"
            fill="#e7000b"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export const BreakingChains = () => {
  const controls = useAnimation();
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    controls.start("break");
  }, [controls]);

  const chainVariant = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    break: {
      opacity: [1, 1, 1, 0.5, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 1],
      },
    },
  };

  const leftLink = {
    initial: { x: 0 },
    break: {
      x: "-100px",
      rotate: 30,
      opacity: 0,
      transition: { duration: 1.5 },
    },
  };

  const centerLink = {
    initial: { opacity: 1, rotate: 0 },
    break: {
      rotate: -30,
      opacity: 0,
      transition: { duration: 1.5 },
    },
  };

  const rightLink = {
    initial: { x: 0 },
    break: {
      x: "100px",
      rotate: 30,
      opacity: 0,
      transition: { duration: 1.5 },
    },
  };

  if (!isShown) {
    return null;
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center absolute z-40 h-screen w-full top-0 left-0 gap-10 bg-black"
      variants={chainVariant}
      initial="initial"
      animate={controls}
      onAnimationComplete={() => setIsShown(false)}
    >
      <motion.div className="flex w-44 justify-center items-center relative">
        <motion.div
          className="w-16 h-16 absolute left-2 z-50"
          variants={leftLink}
        >
          {renderChain()}
        </motion.div>
        <motion.div
          className="w-16 h-16 absolute left-1/2 transform -translate-x-1/2 z-40"
          variants={centerLink}
        >
          {renderCenterChain()}
        </motion.div>
        <motion.div
          className="w-16 h-16 absolute right-2 z-50"
          variants={rightLink}
        >
          {renderChain()}
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col justify-center items-center gap-2">
        <motion.p className="text-slate-100 text-2xl font-semibold tracking-widest">
          Breaking the chains
        </motion.p>
        <motion.p className="text-slate-400 text-lg font-semibold">
          1863 - 2021
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
