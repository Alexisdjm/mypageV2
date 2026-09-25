"use client";

import { useEffect, type RefObject } from "react";

export type CursorPointer = { x: number; y: number };
export type CursorPaint = (pointer: CursorPointer) => void;

const pointer: CursorPointer = { x: -9999, y: -9999 };
const paints = new Set<CursorPaint>();
let frame = 0;
let listening = false;

function onPointerMove(event: PointerEvent) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
}

function tick() {
  for (const paint of paints) paint(pointer);
  frame = requestAnimationFrame(tick);
}

export function subscribeCursorPaint(paint: CursorPaint) {
  paints.add(paint);
  if (!listening) {
    listening = true;
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(tick);
  }

  return () => {
    paints.delete(paint);
    if (paints.size === 0 && listening) {
      listening = false;
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("pointermove", onPointerMove);
    }
  };
}

export function paintCursorLight(root: ParentNode, next: CursorPointer) {
  root.querySelectorAll<HTMLElement>("[data-light]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${next.x - rect.left}px`);
    el.style.setProperty("--y", `${next.y - rect.top}px`);
  });
}

export function useCursorLight(
  rootRef: RefObject<HTMLElement | null>,
  { desktopOnly = false, minWidth = 1280 }: { desktopOnly?: boolean; minWidth?: number } = {},
) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const attach = () => subscribeCursorPaint((next) => paintCursorLight(root, next));

    if (!desktopOnly) return attach();

    const desktop = window.matchMedia(`(min-width: ${minWidth}px)`);
    let unsub: (() => void) | undefined;

    const sync = () => {
      unsub?.();
      unsub = desktop.matches ? attach() : undefined;
    };

    sync();
    desktop.addEventListener("change", sync);
    return () => {
      unsub?.();
      desktop.removeEventListener("change", sync);
    };
  }, [rootRef, desktopOnly, minWidth]);
}
