import React, { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
 
import { cn } from "../../../utils/funcs/magicUI";
 
export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}
 
const DEFAULT_MAGNIFICATION = 120;
const DEFAULT_DISTANCE = 180;
 
const dockVariants = cva(
  "mx-auto w-max mt-8 h-[48px] flex gap-2 rounded-full drop-shadow-xl border-4 border-primary supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md",
);
 
const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);
 
    const renderChildren = () => {
      //@ts-expect-error - children is a valid value
      return React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
        });
      });
    };
 
    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);
 
Dock.displayName = "Dock";
 
export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: number;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}
 
const DockIcon = ({
  // size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
 
  //@ts-expect-error - mousex is a valid value
  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
 
    return val - bounds.x - bounds.width / 2;
  });
 
  const widthSync = useTransform(
    //@ts-expect-error - distanceCalc is a valid value
    distanceCalc,
    [-distance, 0, distance],
    [80, magnification, 80],
  );
 
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
 
  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex cursor-pointer items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
 
DockIcon.displayName = "DockIcon";
 
export { Dock, DockIcon, dockVariants };