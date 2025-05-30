'use client';

import { FaLocationArrow, FaHandshake, FaRocket, FaShieldCat } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen overflow-hidden pt-20">
      {/* Spotlights for dramatic effect */}
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        
        {/* Logo - Centered and responsive */}
        <div className="mb-8 flex justify-center">
          <Image 
            src='/logo.png' 
            width={600} 
            height={600} 
            alt='Wasel Team Logo' 
            className="object-contain drop-shadow-2xl absolute" 
          />
        </div>

        {/* Team Name with elegant styling */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-2 index-10">
            WASEL
          </h1>
          <div className="flex items-center justify-center gap-2 text-blue-100/80">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-12 sm:w-16"></div>
            <HiSparkles className="text-blue-400 text-lg" />
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">Strategic Excellence</span>
            <HiSparkles className="text-blue-400 text-lg" />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-12 sm:w-16"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Compelling tagline */}
          <div className="space-y-4">
            <p className="text-blue-200/90 text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
              🚀 Transforming Visions into Strategic Victories
            </p>
            
            {/* Main headline with better impact */}
            <TextGenerateEffect
              words="Where Government Meets Innovation, Success Follows"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            />
          </div>

          {/* Value proposition with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto my-8">
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <FaHandshake className="text-2xl text-blue-400 mb-2" />
              <span className="text-sm font-medium text-white/90">Strategic Partnerships</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <FaShieldCat className="text-2xl text-purple-400 mb-2" />
              <span className="text-sm font-medium text-white/90">Government Relations</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <FaRocket className="text-2xl text-green-400 mb-2" />
              <span className="text-sm font-medium text-white/90">Business Growth</span>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-center text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Team Wasel bridges the gap between ambition and achievement. We transform complex governmental landscapes into clear pathways for business success.
          </p>

          {/* Call to action with stats */}
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200/80">
              <span>✨ 500+ Strategic Connections</span>
              <span>🎯 98% Success Rate</span>
              <span>🏆 Industry Leaders</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#team">
                <MagicButton
                  title="Meet Team Wasel"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-[49%] transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;