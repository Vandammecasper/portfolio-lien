import { useEffect, useState } from "react";
import { cn } from "../../../utils/funcs/magicUI";
 
interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}
 
export default function TypingAnimation({
  text,
  duration = 100,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
 
  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);
 
    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);
 
  return (
    <h1
      className={cn(
        "font-ivyMode text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}