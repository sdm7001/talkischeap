import { useEffect, useRef } from "react";

/**
 * Cinematic animated audio-waveform background for the hero.
 * Layered sine waves drift and pulse like a live voice signal.
 */
export function WaveformCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const waves = [
      { amp: 0.22, freq: 0.0038, speed: 0.012, color: "rgba(34, 211, 238, 0.5)", width: 2 },
      { amp: 0.3, freq: 0.0026, speed: 0.008, color: "rgba(139, 92, 246, 0.4)", width: 2 },
      { amp: 0.16, freq: 0.005, speed: 0.017, color: "rgba(34, 211, 238, 0.22)", width: 1.5 },
      { amp: 0.38, freq: 0.0018, speed: 0.005, color: "rgba(139, 92, 246, 0.16)", width: 1.5 },
    ];

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const midY = h * 0.55;

      for (const wave of waves) {
        ctx.beginPath();
        ctx.lineWidth = wave.width * dpr;
        ctx.strokeStyle = wave.color;
        for (let x = 0; x <= w; x += 3 * dpr) {
          // Envelope tapers the wave at the edges like a real audio clip
          const env = Math.sin((x / w) * Math.PI);
          const y =
            midY +
            Math.sin(x * wave.freq / dpr + t * wave.speed * 60) *
              wave.amp * h * 0.5 * env *
              (0.75 + 0.25 * Math.sin(t * 0.9 + x * 0.0004));
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      t += 0.016;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
