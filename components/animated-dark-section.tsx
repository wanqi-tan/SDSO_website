"use client";

import { useMemo } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedDarkSectionProps {
  children: ReactNode;
  className?: string;
  py?: string;
}

export default function AnimatedDarkSection({
  children,
  className = "",
  py = "py-24",
}: AnimatedDarkSectionProps) {
  // UseMemo to generate random particle data only once on the client
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      y: [0, -Math.random() * 150 - 50],
      x: [0, (Math.random() - 0.5) * 80],
      opacity: [0, 0.8, 0],
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className={`relative ${py} overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121218] via-[#1a1a24] to-[#121218]"></div>

        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(70, 70, 100, 0.5) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 60%, rgba(70, 70, 100, 0.5) 0%, transparent 60%)",
              "radial-gradient(circle at 40% 80%, rgba(70, 70, 100, 0.5) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 30%, rgba(70, 70, 100, 0.5) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 70% 70%, rgba(90, 90, 140, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(90, 90, 140, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 20%, rgba(90, 90, 140, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, rgba(90, 90, 140, 0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Dots pattern */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            transition: {
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(rgba(160,160,220,0.2)_1.5px,transparent_1.5px)] bg-[length:20px_20px]"></div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                left: p.left,
                top: p.top,
                width: p.width,
                height: p.height,
              }}
              animate={{
                y: p.y,
                x: p.x,
                opacity: p.opacity,
              }}
              transition={{
                duration: p.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: p.delay,
              }}
            />
          ))}
        </div>

        {/* Light beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[300px] w-[30px] bg-gradient-to-b from-blue-300/5 via-blue-300/10 to-blue-300/5 blur-xl"
              style={{
                left: `${20 + i * 30}%`,
                top: "-150px",
                transform: "rotate(15deg)",
              }}
              animate={{
                x: [0, 100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-white">{children}</div>
    </section>
  );
}
