import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import { cn } from "@/libs/utils";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: string[];
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
  size?: "sm" | "md" | "lg" | "xl" | "xxl"; // ✅ extended
}

const iconSizes: Record<NonNullable<CarouselProps["size"]>, number> = {
  sm: 20,
  md: 30,
  lg: 40,
  xl: 60,
  xxl: 80,
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, slides, size = "md", animation = "fadeIn", hoverAnimation = "jiggle", ...props }, ref) => {
    const [index, setIndex] = useState(0);
    const buttonRef1 = useRef<HTMLButtonElement | null>(null);
    const buttonRef2 = useRef<HTMLButtonElement | null>(null);

    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
      if (animation !== "none") {
        entranceAnimations[animation]?.(buttonRef1.current!);
        entranceAnimations[animation]?.(buttonRef2.current!);
      }
    }, [animation]);

    const handleMouseEnter = (el: HTMLButtonElement | null) => {
      if (el) hoverAnimations[hoverAnimation]?.(el);
    };

    const handleMouseLeave = (el: HTMLButtonElement | null) => {
      if (el) gsap.to(el, { scale: 1, rotation: 0, y: 0, duration: 0.3 });
    };

    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((val, id) => (
            <div key={id} className="w-full shrink-0">
              <img src={val} alt={`Slide ${id}`} className="w-full h-full object-cover rounded" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            ref={buttonRef1}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onMouseEnter={() => handleMouseEnter(buttonRef1.current)}
            onMouseLeave={() => handleMouseLeave(buttonRef1.current)}
          >
            <ChevronLeft size={iconSizes[size]} />
          </button>
          <button
            ref={buttonRef2}
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onMouseEnter={() => handleMouseEnter(buttonRef2.current)}
            onMouseLeave={() => handleMouseLeave(buttonRef2.current)}
          >
            <ChevronRight size={iconSizes[size]} />
          </button>
        </div>
      </div>
    );
  }
);

export default Carousel;
