"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  animateOnAppear?: boolean;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
  animateOnAppear = true,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const split = SplitText.create(rootRef.current.querySelector("p"), {
      type: "chars",
      charsClass: "inline-block will-change-transform",
    });

    splitRef.current = split;

    split.chars.forEach((el) => {
      const c = el as HTMLElement;
      gsap.set(c, { attr: { "data-content": c.innerHTML } });
    });

    let observer: IntersectionObserver | null = null;

    // Animation on appear functionality
    if (animateOnAppear) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;

              // Animate all characters with scramble effect
              split.chars.forEach((el, index) => {
                const c = el as HTMLElement;
                gsap.to(c, {
                  delay: index * 0.05, // Stagger animation
                  duration: duration,
                  scrambleText: {
                    text: c.dataset.content || "",
                    chars: scrambleChars,
                    speed,
                  },
                  ease: "none",
                });
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(rootRef.current);
    }

    // Hover effect functionality
    const handleMove = (e: PointerEvent) => {
      if (!splitRef.current) return;

      splitRef.current.chars.forEach((el: Element) => {
        const c = el as HTMLElement;
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener("pointermove", handleMove);

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (el) {
        el.removeEventListener("pointermove", handleMove);
      }
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [radius, duration, speed, scrambleChars, animateOnAppear]);

  return (
    <div ref={rootRef} className={`font-mono ${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
