import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

// import gsap from "gsap";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";

interface CarouselProps
  extends
    React.HTMLAttributes<HTMLDivElement>{
  slides: string[];
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
  size?: "sm" | "md" | "lg";
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      slides,
      size,
      animation = "fadeIn",
      hoverAnimation = "jiggle",
      ...props
    },
    ref,
  ) => {
    const iconSizes = {
  sm: 20,
  md: 30,
  lg: 40,
  xl: 60,
  xxl: 80
};

console.log(animation)
    const [index, setIndex] = useState(0);
    console.log()
    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () =>
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const buttonRef1 = useRef<HTMLButtonElement | null>(null);
    const buttonRef2 = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      const el1 = buttonRef1.current;
      const el2 = buttonRef2.current;
      if (!el1 || !el2 || animation === "none") return;
      entranceAnimations[animation]?.(el1);
      entranceAnimations[animation]?.(el2);
    }, [animation]);

    const handleMouseEnter = (num:number) => {
        if(num === 1){
      const el = buttonRef1.current;
    
      if (!el) return;
      hoverAnimations[hoverAnimation]?.(el);
        } 
        if(num === 2) {
            const el = buttonRef2.current;
    
      if (!el) return;
      hoverAnimations[hoverAnimation]?.(el);
        }
    };

    const handleMouseLeave = (num:number) => {
        if(num === 1){
      gsap.to(buttonRef1.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3,
      });
      return;
    }
    if(num === 2){
        gsap.to(buttonRef2.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3,
      });
      return;
    }
    };

    return (
      <div
        ref={ref}
        className={`${className} relative overflow-hidden`}
        {...props}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((val, id) => (
            <div key={id} className="w-full flex-shrink-0">
              <img
                src={val}
                alt={`Slide ${id}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            ref={buttonRef1}
           
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <ChevronLeft  size={iconSizes[size || "md"]} />
          </button>
          <button
            ref={buttonRef2}
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <ChevronRight  size={iconSizes[size || "md"]} />
          </button>
        </div>
      </div>
    );
  },
);

export default Carousel;
