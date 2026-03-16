import { type RefObject, useEffect } from "react";
import { useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

export function useCountUp(target: number, ref: RefObject<Element | null>) {
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 80, damping: 20 });
  const displayed = useTransform(spring, (v) => String(Math.round(v)));
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) raw.set(target);
  }, [inView, target, raw]);

  return displayed;
}
