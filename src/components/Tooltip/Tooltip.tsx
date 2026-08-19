import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { cn } from "@/libs/utils";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React, { useEffect, useRef, useState } from "react";

interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations;
  content: React.ReactNode;
}

const tooltipVariants = cva(
  "absolute z-50 rounded-md shadow-md text-xs font-medium transition-opacity duration-200",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
        secondary: "bg-indigo-500 hover:bg-indigo-700 text-white",
        ok: "bg-green-500 hover:bg-green-700",
        ghost: "bg-gray-50 hover:bg-gray-100 text-gray-700",
        destructive: "bg-red-700 text-white hover:bg-red-900",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
      },
      position: {
        top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
        bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
        left: "right-full mr-2 top-1/2 -translate-y-1/2",
        right: "left-full ml-2 top-1/2 -translate-y-1/2",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "md",
      position: "top",
    },
  }
);

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    { className, variant, size, position, asChild = false, animation = "fadeIn", content, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    // console.log(children)

    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = tooltipRef.current;
      if (!el || animation === "none" || !visible) return;
      entranceAnimations[animation]?.(el);
    }, [animation, visible]);

    return (
      <div
        className="relative inline-block"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <Comp>{children}</Comp>
        {visible && (
          <div
            ref={(e) => {
              tooltipRef.current = e as HTMLDivElement;
              if (typeof ref === "function") ref(e as HTMLDivElement);
              else if (ref)
                (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            className={cn(tooltipVariants({ variant, size, position, className }))}
            {...props}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
export { Tooltip, tooltipVariants };
