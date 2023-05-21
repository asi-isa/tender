"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Video from "../video";

const stopLoaderAnimationDuration = 0.65;

export default function InitialLoader() {
  const [videoIsReadyToPlay, setVideoIsReadyToPlay] = useState(false);
  const [startPlaying, setStartPlaying] = useState(false);
  const [stopLoaderAnimation, setStopLoaderAnimation] = useState(false);

  useEffect(() => {
    if (videoIsReadyToPlay) {
      setStopLoaderAnimation(true);

      window.setTimeout(() => {
        console.log("play");

        setStartPlaying(true);
      }, stopLoaderAnimationDuration);
    }
  }, [videoIsReadyToPlay]);

  // TODO replace with actual loader animation
  return (
    <div>
      {!startPlaying && (
        <motion.div
          animate={{ opacity: stopLoaderAnimation ? 0 : 1 }}
          transition={{ duration: stopLoaderAnimationDuration }}
          className="fixed h-full w-full bg-black z-30"
        ></motion.div>
      )}

      <div className="absolute top-0 h-screen w-screen">
        <Video
          src="/steak_1080p_cut_10_c.mp4"
          poster="/next.svg"
          onReadyToPlay={() => setVideoIsReadyToPlay(true)}
          startPlaying={startPlaying}
        />
      </div>
    </div>
  );
}
