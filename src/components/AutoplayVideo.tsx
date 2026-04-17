"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  className?: string;
}

export default function AutoplayVideo({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
