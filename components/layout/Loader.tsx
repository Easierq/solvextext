"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFade(true), 2500); // start fade
    const hideTimer = setTimeout(() => {
      setVisible(false); // remove from DOM
      document.body.style.overflow = "";
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-yellow-300 transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/lw.svg"
        alt="logo"
        className="h-auto w-[240px] md:w-[360px] lg:w-[500px]"
      />
    </div>
  );
}
