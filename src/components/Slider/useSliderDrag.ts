"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { SliderDirection } from "./Slider";

const DRAG_THRESHOLD_PX = 6;
const DESKTOP_MQ = "(hover: hover) and (pointer: fine)";

function getTranslateX(el: HTMLElement) {
  const transform = window.getComputedStyle(el).transform;
  if (transform === "none") return 0;
  return new DOMMatrix(transform).m41;
}

function wrapMarqueeTranslate(translateX: number, loopWidth: number) {
  if (loopWidth <= 0) return 0;
  let x = translateX % loopWidth;
  if (x > 0) x -= loopWidth;
  return x;
}

function resumeTrackAnimation(
  track: HTMLDivElement,
  duration: number,
  direction: SliderDirection,
) {
  const loopWidth = track.scrollWidth / 2;
  const tx = wrapMarqueeTranslate(getTranslateX(track), loopWidth);
  let progress = -tx / loopWidth;
  if (direction === "right") progress = 1 - progress;

  track.style.removeProperty("animation");
  track.style.removeProperty("transform");
  track.style.animationDuration = `${duration}s`;
  track.style.animationDelay = `${-progress * duration}s`;
  track.style.animationPlayState = "running";
}

type DragSession = {
  pointerId: number;
  startX: number;
  startY: number;
  baseTranslate: number;
};

export function useSliderDrag({
  rootRef,
  trackRef,
  draggable,
  duration,
  direction,
}: {
  rootRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  draggable: boolean;
  duration: number;
  direction: SliderDirection;
}) {
  const activeDesktopRef = useRef(false);
  const draggingRef = useRef(false);
  const manualRef = useRef(false);
  const sessionRef = useRef<DragSession | null>(null);

  useEffect(() => {
    if (!draggable) return;

    const desktop = window.matchMedia(DESKTOP_MQ);
    const syncDesktop = () => {
      activeDesktopRef.current = desktop.matches;
    };
    syncDesktop();
    desktop.addEventListener("change", syncDesktop);
    return () => desktop.removeEventListener("change", syncDesktop);
  }, [draggable]);

  useEffect(() => {
    if (!draggable) return;

    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const beginDrag = (clientX: number) => {
      track.style.animationPlayState = "paused";
      const baseTranslate = getTranslateX(track);
      track.style.animation = "none";
      track.style.transform = `translate3d(${baseTranslate}px, 0, 0)`;
      manualRef.current = true;
      draggingRef.current = true;
      root.classList.add("is-dragging");
      return baseTranslate;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!activeDesktopRef.current || event.button !== 0) return;
      sessionRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        baseTranslate: 0,
      };
    };

    const onPointerMove = (event: PointerEvent) => {
      const session = sessionRef.current;
      if (!session || event.pointerId !== session.pointerId) return;
      if (!activeDesktopRef.current) return;

      const dx = event.clientX - session.startX;
      const dy = event.clientY - session.startY;

      if (!draggingRef.current) {
        if (Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
        event.preventDefault();
        const base = beginDrag(session.startX);
        session.baseTranslate = base;
        track.setPointerCapture(event.pointerId);
      }

      const next = session.baseTranslate + (event.clientX - session.startX);
      track.style.transform = `translate3d(${next}px, 0, 0)`;
    };

    const endDrag = (event: PointerEvent) => {
      const session = sessionRef.current;
      if (!session || event.pointerId !== session.pointerId) return;

      if (draggingRef.current && track.hasPointerCapture(event.pointerId)) {
        track.releasePointerCapture(event.pointerId);
      }

      draggingRef.current = false;
      sessionRef.current = null;
      root.classList.remove("is-dragging");

      if (manualRef.current) {
        requestAnimationFrame(() => {
          if (!root.matches(":hover") && trackRef.current) {
            resumeTrackAnimation(trackRef.current, duration, direction);
            manualRef.current = false;
          }
        });
      }
    };

    const onPointerLeave = () => {
      if (draggingRef.current || !manualRef.current) return;
      if (!trackRef.current) return;
      resumeTrackAnimation(trackRef.current, duration, direction);
      manualRef.current = false;
    };

    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    return () => {
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [draggable, direction, duration, rootRef, trackRef]);
}
