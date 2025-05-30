'use client';

import React, { useState } from 'react';
import { FaGlobe, FaQuoteLeft } from 'react-icons/fa';
import { aboutSection } from '../data';
import { CanvasRevealEffect } from './ui/CanvasRevealEffect';
import { motion, AnimatePresence } from 'framer-motion';

interface Advantage {
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const [hoveredAdvantage, setHoveredAdvantage] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">{aboutSection.title}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {aboutSection.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {aboutSection.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">{aboutSection.description}</p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aboutSection.advantages.map((advantage: Advantage, index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.1] transition-all duration-500 hover:shadow-xl shadow-input dark:shadow-none"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
              onMouseEnter={() => setHoveredAdvantage(index)}
              onMouseLeave={() => setHoveredAdvantage(null)}
            >
              <AnimatePresence>
                {hoveredAdvantage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName={`bg-${index % 4 === 0 ? 'purple' : index % 3 === 0 ? 'sky' : index % 2 === 0 ? 'pink' : 'emerald'}-600 rounded-3xl overflow-hidden`}
                      colors={[[(index * 50) % 255, (index * 30 + 100) % 255, (index * 70 + 50) % 255]]}
                      dotSize={2}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="p-8 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaGlobe className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto text-center p-8 rounded-3xl border border-white/[0.1]"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}>
          <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 relative">
            <FaQuoteLeft className="absolute -top-4 -left-4 text-primary/30 text-4xl" />
            <span className="relative z-10">{aboutSection.closingStatement}</span>
          </blockquote>
          <p className="text-muted-foreground text-lg mb-8">
            {aboutSection.finalMessage}
          </p>
          <p className="text-primary font-medium italic">
            {aboutSection.taglineBottom}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;