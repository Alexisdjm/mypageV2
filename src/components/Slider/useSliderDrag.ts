"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { SliderDirection } from "./Slider";

const DRAG_THRESHOLD_PX = 8;

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

/** One loop = half the list (original + duplicate items in a single row). */
function getMarqueeLoopWidth(track: HTMLDivElement) {
  const list = track.querySelector(":scope > ul");
  if (list) return list.getBoundingClientRect().width / 2;
  return track.scrollWidth / 2;
}

function resumeTrackAnimation(
  track: HTMLDivElement,
  duration: number,
  direction: SliderDirection,
) {
  const loopWidth = getMarqueeLoopWidth(track);
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
  const draggingRef = useRef(false);
  const manualRef = useRef(false);
  const didDragRef = useRef(false);
  const sessionRef = useRef<DragSession | null>(null);

  useEffect(() => {
    if (!draggable) return;

    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const beginDrag = () => {
      track.style.animationPlayState = "paused";
      const baseTranslate = getTranslateX(track);
      track.style.animation = "none";
      track.style.transform = `translate3d(${baseTranslate}px, 0, 0)`;
      manualRef.current = true;
      draggingRef.current = true;
      didDragRef.current = true;
      root.classList.add("is-dragging");
      return baseTranslate;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      didDragRef.current = false;
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

      const dx = event.clientX - session.startX;
      const dy = event.clientY - session.startY;

      if (!draggingRef.current) {
        if (Math.abs(dx) < DRAG_THRESHOLD_PX && Math.abs(dy) < DRAG_THRESHOLD_PX) return;
        if (Math.abs(dx) < Math.abs(dy)) {
          sessionRef.current = null;
          return;
        }
        event.preventDefault();
        const base = beginDrag();
        session.baseTranslate = base;
        track.setPointerCapture(event.pointerId);
      }

      event.preventDefault();

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

      if (manualRef.current && trackRef.current) {
        requestAnimationFrame(() => {
          if (!trackRef.current) return;
          resumeTrackAnimation(trackRef.current, duration, direction);
          manualRef.current = false;
        });
      }
    };

    const onClickCapture = (event: MouseEvent) => {
      if (!didDragRef.current) return;
      event.preventDefault();
      event.stopPropagation();
      didDragRef.current = false;
    };

    root.addEventListener("pointerdown", onPointerDown, { capture: true });
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    root.addEventListener("click", onClickCapture, { capture: true });

    return () => {
      root.removeEventListener("pointerdown", onPointerDown, { capture: true });
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      root.removeEventListener("click", onClickCapture, { capture: true });
    };
  }, [draggable, direction, duration, rootRef, trackRef]);
}
