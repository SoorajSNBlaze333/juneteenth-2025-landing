import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from "motion/react";

// Misc Components
import { YearTitle } from "./components/year-title";
import { Title } from "./components/title";
import { AiImage } from "./components/ai-image";
import { RollingYear } from "./components/rolling-year";
import { YearProgress } from "./components/year-progress";
import { BreakingChains } from "./components/breaking-chains";
import { Footer } from "./components/footer";

// Historic Events
import { EmancipationProclamation } from "./components/historic-events/emancipation-proclamation";
import { GeneralOrderThree } from "./components/historic-events/general-order-three";
import { FirstCelebration } from "./components/historic-events/first-celebration";
import { TexasHoliday } from "./components/historic-events/texas-holiday";
import { FederalHoliday } from "./components/historic-events/federal-holiday";
import { OtherYears } from "./components/historic-events/other-years";

const PERCENTAGE = [0, 0.25, 0.5, 0.75, 1];
const YEARS = [1863, 1865, 1872, 1980, 2021];

const App = () => {
  const [scroll, setScroll] = useState(0);
  const [direction, setDirection] = useState(1);
  const [year, setYear] = useState(1863);
  const scrollRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const currentYear = useTransform(scrollYProgress, PERCENTAGE, YEARS);

  // set the scroll & set direction based on scroll
  useMotionValueEvent(scrollYProgress, "change", (newScroll) => {
    if (newScroll > scroll) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setScroll(newScroll);
  });

  // get the current year based on the transformed scroll y
  useMotionValueEvent(currentYear, "change", (latest) => {
    setYear(Math.round(latest));
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
      <BreakingChains />
      <main ref={scrollRef} className="relative overflow-y-scroll h-screen">
        <section
          className="relative w-full grid grid-cols-1"
          style={{ height: "400vh" }}
        >
          <section className="sticky top-0 col-span-1 flex justify-center items-center h-screen w-full gap-4">
            <AnimatePresence initial={false} mode="popLayout">
              {isYearAvailable ? (
                <motion.section
                  key="year-available"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, type: "spring", bounce: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-[1000px] w-full"
                >
                  <motion.div
                    key="year-available-left"
                    className="col-span-2 flex justify-center md:justify-end items-center gap-6"
                  >
                    <YearProgress progress={scroll} onClick={handleYearClick} />
                    <div className="flex flex-col justify-center items-end gap-6">
                      <AiImage year={year} />
                      <RollingYear year={year} direction={direction} />
                    </div>
                  </motion.div>
                  <div className="col-span-3 flex flex-col justify-start items-center md:items-start gap-4">
                    <Title year={year} />
                    <YearTitle year={year} />
                    {year === 1863 && <EmancipationProclamation />}
                    {year === 1865 && <GeneralOrderThree />}
                    {year === 1872 && <FirstCelebration />}
                    {year === 1980 && <TexasHoliday />}
                    {year === 2021 && <FederalHoliday />}
                  </div>
                </motion.section>
              ) : (
                <motion.section
                  key="year-not-available"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, type: "spring", bounce: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-[1000px] w-full"
                >
                  <motion.div
                    key="year-available-left"
                    className="col-span-2 flex justify-center md:justify-end items-center gap-6"
                  >
                    <YearProgress progress={scroll} onClick={handleYearClick} />
                    <div className="flex flex-col justify-center items-end gap-6">
                      <AiImage year={year} />
                      <RollingYear year={year} direction={direction} />
                    </div>
                  </motion.div>
                  <div className="col-span-3 flex flex-col justify-start items-center md:items-start gap-4">
                    <Title year={year} />
                    <YearTitle year={year} />
                    <OtherYears year={year} />
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </section>
        </section>
        <section className="h-screen w-full fixed top-0 left-0 -z-50 flex justify-center items-center bg-black">
          <section className="max-w-[800px] w-full flex flex-wrap justify-center items-center blur-[100px]">
            <div className="w-[400px] h-[400px] bg-red-500/40"></div>
            <div className="w-[400px] h-[400px] bg-yellow-300/40"></div>
            <div className="w-[400px] h-[400px] bg-green-300/40"></div>
          </section>
          <section className="absolute flex justify-center items-center blur-[100px]">
            <div className="w-[500px] h-[500px] bg-black absolute"></div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default App;
