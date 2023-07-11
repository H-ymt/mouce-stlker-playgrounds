"use client";

import { FC, CSSProperties } from "react";
import { animated } from "react-spring";
import useMouseStalker from "@/utils/useMouseStalker";

const initMouse = {
  width: 16,
  height: 16,
  borderRadius: 8,
  opacity: 0,
  top: 0,
  left: 0,
};

const springConfig = {
  frequency: 0.1,
  damping: 2,
};

const mouseStyles: CSSProperties = {
  pointerEvents: "none",
  position: "fixed",
  zIndex: 100,
  backgroundColor: "white",
  mixBlendMode: "difference",
};

const MouseStalker: FC = () => {
  const springStyles = useMouseStalker(initMouse, springConfig, 1.8);

  return <animated.div style={{ ...mouseStyles, ...springStyles }} />;
};

export default MouseStalker;
