"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster: string;
  onReadyToPlay: () => void;
  startPlaying: boolean;
}

export default function Video({
  src,
  poster,
  onReadyToPlay,
  startPlaying,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    if (ref) {
      // video data has already been loaded
      if (ref.current.readyState === ref.current.HAVE_ENOUGH_DATA) {
        onReadyToPlay();
        return;
      }

      ref.current.oncanplaythrough = () => {
        onReadyToPlay();
      };
    }
  }, [ref]);

  useEffect(() => {
    if (startPlaying && ref) {
      ref.current.play();
    }
  }, [ref, startPlaying]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      typeof="video/mp4"
      muted
      loop
      className="absolute w-full h-full object-cover brightness-75"
    />
  );
}
