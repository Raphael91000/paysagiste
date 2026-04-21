"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import WaveDivider from "@/components/WaveDivider";

const BG          = "#0B1C10";
const HERO_BG     = "#1A2E1F";
const SERVICES_BG = "#162618";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { numeric: 150, suffix: "+",   label: "Jardins créés",       sub: "depuis 2008" },
  { numeric: 15,  suffix: "",    label: "Ans d'expérience",    sub: "savoir-faire familial" },
  { numeric: 98,  suffix: " %",  label: "Clients satisfaits",  sub: "selon nos enquêtes" },
  { numeric: 50,  suffix: " km", label: "Zone d'intervention", sub: "autour de Bussang" },
];

function CountUp({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, target]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="relative w-full" style={{ zIndex: 10 }}>
      <WaveDivider from={HERO_BG} to={BG} />

      <section
        aria-label="Chiffres clés"
        style={{ background: BG }}
        className="w-full py-12 md:py-16"
      >
        <div ref={ref} className="container-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="relative flex flex-col items-center justify-center gap-1 py-8 px-4 text-center"
              >
                {i > 0 && (
                  <span
                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px"
                    style={{ background: "rgba(168,201,127,0.15)" }}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="font-fraunces text-leaf leading-none"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  <CountUp target={stat.numeric} suffix={stat.suffix} run={isInView} />
                </span>
                <span className="text-cream text-sm font-medium">{stat.label}</span>
                <span className="text-sage/80 text-xs">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from={BG} to={SERVICES_BG} index={5} />
    </div>
  );
}
