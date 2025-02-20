"use client";
import { useEffect, useRef, useState } from "react";
import TitleContainer from "./components/(Title)/Container";
import EndingContainer from "./components/(Ending)/Container";

import "./styles/reset.scss";
import "./styles/main.scss";
import ContentContainer from "./components/(Content)/Container";

export default function Page() {
  const [isFixed, setIsFixed] = useState(true);
  const contactRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contactRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      },
      { threshold: 0.1 }
    );
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => observer.disconnect();
  }, [contentRef]);

  return (
    <>
      <TitleContainer contactRef={contactRef} isFixed={isFixed} />
      <ContentContainer ref={contentRef} />
      <EndingContainer />
    </>
  );
}
