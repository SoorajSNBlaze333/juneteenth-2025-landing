import { useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from "motion/react";

import { RollingYear } from "./components/years/rolling-year";
import { SnapSection } from "./components/sections/snap-section";
import { BackgroundBlur } from "./components/misc/background-blur";
import { Emancipation } from "./components/sections/emancipation";
import { GeneralOrder } from "./components/sections/general-order";
import { FirstJuneteenthCelebration } from "./components/sections/first-juneteenth";
import { HolidayTexas } from "./components/sections/holiday-texas";
import { FederalHoliday } from "./components/sections/federal-holiday";

const YEARS = [1863, 1865, 1872, 1980, 2021];

const App = () => {
  const [scroll, setScroll] = useState(0);
  const [direction, setDirection] = useState(1);
  const [year, setYear] = useState(1863);
  const scrollRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const index = useTransform(scrollYProgress, [0, 1], [0, YEARS.length - 1]);

  // set the scroll & set direction based on scroll
  useMotionValueEvent(scrollYProgress, "change", (newScroll) => {
    if (newScroll > scroll) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setScroll(newScroll);
  });

  useMotionValueEvent(index, "change", (latest) => {
    const i = Math.round(latest);
    setYear(YEARS[i]);
  });

  return (
    <>
      <main
        className="relative overflow-y-scroll h-screen snap-y snap-mandatory scrollbar-none"
        ref={scrollRef}
      >
        <div className="sticky top-1/2 -translate-y-1/2 z-50 flex justify-center">
          <AnimatePresence initial={false} mode="popLayout">
            <RollingYear year={year} direction={direction} />
          </AnimatePresence>
        </div>

        <motion.section className="h-[500vh]">
          <AnimatePresence initial={false} mode="popLayout">
            <SnapSection>
              <Emancipation />
            </SnapSection>
            <SnapSection>
              <GeneralOrder />
            </SnapSection>
            <SnapSection>
              <FirstJuneteenthCelebration />
            </SnapSection>
            <SnapSection>
              <HolidayTexas />
            </SnapSection>
            <SnapSection>
              <FederalHoliday />
            </SnapSection>
          </AnimatePresence>
        </motion.section>
      </main>
      <BackgroundBlur />
    </>
  );
};

export default App;
