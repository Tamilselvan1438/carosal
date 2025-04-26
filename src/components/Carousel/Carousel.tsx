import {
  useState,
  useEffect,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import CarouselControls from "./CarouselControls";
import CarouselDots from "./CarouselDots";

type CarouselProps = {
  children: ReactElement[];
  autoPlay?: boolean;
  interval?: number;
  controls?: boolean;
  dots?: boolean;
};

export default function Carousel({
  children,
  autoPlay = true,
  interval = 3000,
  controls = true,
  dots = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(Children.count(children));

  useEffect(() => {
    setLength(Children.count(children));
  }, [children]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Children.map(children, (child: any) => {
          return cloneElement(child, {
            className: `${child.props.className || ""} w-full flex-shrink-0`,
          });
        })}
      </div>

      {controls && <CarouselControls next={next} prev={prev} />}
      {dots && (
        <CarouselDots
          length={length}
          currentIndex={currentIndex}
          goToIndex={goToIndex}
        />
      )}
    </div>
  );
}
