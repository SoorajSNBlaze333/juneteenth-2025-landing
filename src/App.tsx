import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from "motion/react";

import { RollingYear } from "./components/rolling-year";
import { SnapSection } from "./components/sections/snap-section";
import { BackgroundBlur } from "./components/misc/background-blur";
import { Emancipation } from "./components/sections/emancipation";
import { GeneralOrder } from "./components/sections/general-order";
import { FirstJuneteenthCelebration } from "./components/sections/first-juneteenth";
import { HolidayTexas } from "./components/sections/holiday-texas";
import { FederalHoliday } from "./components/sections/federal-holiday";

const PERCENTAGE = [0, 0.25, 0.5, 0.75, 1];
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

  const handleYearClick = (progress: number) => {
    if (scrollRef.current) {
      const totalScrollableHeight =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;

      const scrollY = totalScrollableHeight * progress;

      scrollRef.current.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
    }
  };

  const isYearAvailable = useMemo(
    () =>
      year === 1863 ||
      year === 1865 ||
      year === 1872 ||
      year === 1980 ||
      year === 2021,
    [year]
  );

  const findClosestYear = useCallback(
    (direction: number) => {
      if (isYearAvailable) {
        const indexOfCurrentYear = YEARS.findIndex((YEAR) => YEAR === year);
        if (direction > 0) {
          return PERCENTAGE[Math.min(YEARS.length - 1, indexOfCurrentYear + 1)];
        }
        return PERCENTAGE[Math.max(0, indexOfCurrentYear - 1)];
      } else {
        let ranges = { rangeStart: -1, rangeEnd: -1 };
        YEARS.forEach((YEAR, index) => {
          if (year >= YEAR) {
            ranges = {
              rangeStart: index,
              rangeEnd: Math.min(YEARS.length - 1, index + 1),
            };
          }
        });
        return PERCENTAGE[direction > 0 ? ranges.rangeEnd : ranges.rangeStart];
      }
    },
    [isYearAvailable, year]
  );

  const handleKeys = useCallback(
    (key: string) => {
      if (key === "ArrowRight") {
        handleYearClick(findClosestYear(1));
      } else if (key === "ArrowLeft") {
        handleYearClick(findClosestYear(-1));
      }
    },
    [findClosestYear]
  );

  useEffect(() => {
    window.addEventListener("keydown", (event) => handleKeys(event.key));

    return () => {
      window.removeEventListener("keydown", (event) => handleKeys(event.key));
    };
  }, [handleKeys, isYearAvailable, year]);

  return (
    <>
      <main
        className="relative overflow-y-scroll h-screen snap-y snap-mandatory scrollbar-none"
        ref={scrollRef}
      >
        <div className="sticky top-1/2 -translate-y-1/2 z-10 flex justify-center">
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
