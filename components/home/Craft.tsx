"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    title: "Rough-sawn.",
    body: "Every plank is selected by hand at the mill, checked for grain direction before it ever meets a blade.",
    img: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=1000&h=900&fit=crop",
  },
  {
    title: "Joined, not fastened.",
    body: "Mortise-and-tenon joinery throughout — no screws in the load-bearing frame, ever.",
    img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=1000&h=900&fit=crop",
  },
  {
    title: "Oiled by hand.",
    body: "Four coats, four days, one person per piece — finished the same way it was a decade ago.",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1000&h=900&fit=crop",
  },
];

export default function Craft() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIdx = useRef(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      gsap.set(stepRefs.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(stepRefs.current[0], { opacity: 1, pointerEvents: "auto" });
      gsap.set(imgRefs.current, { opacity: 0 });
      gsap.set(imgRefs.current[0], { opacity: 1 });

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const idx = Math.min(
            steps.length - 1,
            Math.floor(self.progress * steps.length),
          );
          if (idx === activeIdx.current) return;
          activeIdx.current = idx;

          stepRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.to(el, {
              opacity: i === idx ? 1 : 0,
              duration: 0.3,
              onStart: () => {
                if (i === idx) el.style.pointerEvents = "auto";
              },
              onComplete: () => {
                if (i !== idx) el.style.pointerEvents = "none";
              },
            });
          });
          imgRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.to(el, { opacity: i === idx ? 1 : 0, duration: 0.4 });
          });
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section id="craft" className="relative text-black">
      <div ref={wrapRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4">
              <div className="relative h-[220px]">
                {steps.map((s, i) => (
                  <div
                    key={s.title}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    className="absolute inset-0"
                  >
                    <h3 className="font-display text-4xl md:text-5xl mb-4 font-normal">
                      {s.title}
                    </h3>
                    <p className="text-paper/60 text-lg max-w-sm">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6 relative h-[60vh] rounded-2xl overflow-hidden">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  ref={(el) => {
                    imgRefs.current[i] = el;
                  }}
                  className="absolute inset-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
