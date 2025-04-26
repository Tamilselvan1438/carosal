type CarouselDotsProps = {
    length: number;
    currentIndex: number;
    goToIndex: (index: number) => void;
  };
  
  export default function CarouselDots({
    length,
    currentIndex,
    goToIndex,
  }: CarouselDotsProps) {
    return (
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {Array.from({ length }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  }