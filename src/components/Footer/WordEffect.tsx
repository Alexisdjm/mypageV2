import type { CSSProperties } from "react";
import { footerSite } from "@/src/config/footer";

export type WordEffectProps = {
  /** Display text (defaults to site name in footer config). */
  text?: string;
  /** Fill when the cursor is far — should sit barely above the page background. */
  baseColor?: string;
  /** Fill at the cursor hotspot — keep close to `baseColor` for a subtle reveal. */
  glowColor?: string;
  /** Cursor glow radius in pixels. */
  glowRadius?: number;
  /** How much of the radial gradient stays at `glowColor` before fading (0–100). Lower = tighter hotspot. */
  glowCore?: number;
  /** Gradient stop (0–100) where the fill reaches `baseColor`. Higher = wider soft glow. */
  glowFalloff?: number;
  className?: string;
};

const defaults = footerSite.wordEffect;

export default function WordEffect({
  text = footerSite.wordEffectName,
  baseColor = defaults.baseColor,
  glowColor = defaults.glowColor,
  glowRadius = defaults.glowRadius,
  glowCore = defaults.glowCore,
  glowFalloff = defaults.glowFalloff,
  className = "",
}: WordEffectProps) {
  const glowStyle = {
    "--word-base-color": baseColor,
    "--word-glow-color": glowColor,
    "--word-glow-radius": `${glowRadius}px`,
    "--word-glow-core": `${glowCore}%`,
    "--word-glow-falloff": `${glowFalloff}%`,
  } as CSSProperties;

  return (
    <div className="relative overflow-hidden">
      <p
        data-light
        aria-hidden="true"
        style={glowStyle}
        className={`footer-word-light pointer-events-none -mb-[0.12em] px-5 pt-8 font-[family-name:var(--font-montserrat)] text-[clamp(4.5rem,21vw,12.5rem)] font-semibold leading-[0.88] tracking-tight select-none md:px-6 ${className}`}
      >
        {text}
      </p>
    </div>
  );
}
