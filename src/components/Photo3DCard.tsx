import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Database, Sparkles, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export const Photo3DCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation between -12 and +12 degrees
    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.65,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className="relative h-full w-full select-none"
      style={{ perspective: '1100px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Tilting Card Container */}
      <div
        ref={cardRef}
        className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-900 transition-transform duration-200 ease-out shadow-2xl"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background 3D Perspective Grid & Glow */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

        {/* Anand's Portrait Image */}
        <img
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          referrerPolicy="no-referrer"
          className="relative z-10 h-full w-full object-cover object-top filter brightness-[1.02] contrast-[1.03]"
        />

        {/* Measured Contrast Gradient Scrim */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

        {/* Dynamic 3D Glare & Lighting Sheen */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(56, 189, 248, 0.35) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)`,
            opacity: glarePos.opacity,
          }}
        />

        {/* 3D Floating Holographic Badges (Projecting in Z-Space) */}
        
        {/* Top Floating Badge 1: 100M+ Records */}
        <div
          className="absolute top-4 left-4 z-30 transition-transform duration-200"
          style={{ transform: 'translateZ(42px)' }}
        >
          <div className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-950/85 px-3 py-1.5 shadow-xl backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-white tabular-nums">
              100M+ Records
            </span>
            <span className="text-[10px] text-cyan-300 font-medium">Migrated</span>
          </div>
        </div>

        {/* Top Floating Badge 2: Role */}
        <div
          className="absolute top-4 right-4 z-30 transition-transform duration-200"
          style={{ transform: 'translateZ(38px)' }}
        >
          <div className="flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-950/85 px-3 py-1.5 shadow-xl backdrop-blur-md">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span className="text-[11px] font-mono font-semibold text-slate-200">
              Senior Engineer
            </span>
          </div>
        </div>

        {/* Bottom Floating Info Card */}
        <div
          className="absolute bottom-4 left-4 right-4 z-30 transition-transform duration-200"
          style={{ transform: 'translateZ(48px)' }}
        >
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-extrabold text-white tracking-wide">
                  {personalInfo.name}
                </p>
                <p className="text-xs text-cyan-400 font-mono font-medium">
                  Data Engineer · Senior Data Migration
                </p>
              </div>
              <span className="rounded-lg bg-cyan-500/20 px-2.5 py-1 text-[11px] font-mono font-bold text-cyan-300 border border-cyan-500/30">
                Tecnotree
              </span>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin size={12} className="text-cyan-400" />
                <span>London UK Onsite Delivery · Tier-1 MVNO</span>
              </span>
              <span className="text-cyan-400 font-semibold">3.8+ YOE</span>
            </div>
          </div>
        </div>

        {/* 3D Depth Perimeter Hairline */}
        <div
          className="pointer-events-none absolute inset-2 rounded-2xl border border-cyan-400/20 z-20"
          style={{ transform: 'translateZ(20px)' }}
        />
      </div>
    </div>
  );
};
