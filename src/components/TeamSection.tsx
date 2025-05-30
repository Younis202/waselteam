'use client';

import React, { useState } from 'react';
import { teamMembers } from '../data';
import Image from 'next/image';

// TypeScript interfaces
interface TeamMember {
  id: number;
  name: string;
  role: string;
  subtitle: string;
  description: string;
  quote: string;
  education: string[];
  expertise: string[];
  className: string;
  img?: string;
}

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberClick = (memberId: number): void => {
    setSelectedMember(selectedMember === memberId ? null : memberId);
  };

  return (
    <div className="pb-20 pt-20 relative" id='team'>
      {/* Background Grid */}
      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0" />

      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mx-auto mb-4">
            Meet The Team
          </p>
          <h2 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-6">
            The Minds Behind <span className="text-purple"> Wasel</span>
          </h2>
          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl text-white-200 max-w-3xl mx-auto">
            Four distinct perspectives. One unified mission. Strategic excellence delivered.
          </p>
        </div>

        {/* Team Grid - Improved with better spacing and alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {teamMembers.map((member: TeamMember) => (
            <div
              key={member.id}
              className={`group relative p-6 lg:p-8 rounded-3xl bg-black-200 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-500 cursor-pointer h-fit ${selectedMember === member.id ? 'border-purple/50 shadow-2xl shadow-purple/10' : ''
                }`}
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Gradient overlay for hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Member Header - Improved layout */}
                <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                  {/* Image Container - Fixed dimensions */}
                  <div className="flex-shrink-0 w-full sm:w-32 lg:w-40">
                    <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform border border-white/[0.1]">
                      {member.img ? (
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple/20 to-blue/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-white">
                            {member.name.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Content - Better alignment */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-purple font-semibold text-base lg:text-lg mb-1">
                      {member.role}
                    </p>
                    <p className="text-white-200 text-sm leading-relaxed">
                      {member.subtitle}
                    </p>
                  </div>
                </div>

                {/* Member Description - Better spacing */}
                <div className="space-y-4 mb-6">
                  <p className="text-white-200 leading-relaxed text-sm">
                    {member.description}
                  </p>

                  {/* Quote - Improved styling */}
                  <blockquote className="border-l-4 border-purple/30 pl-4 py-2 italic text-white/80 text-sm bg-white/[0.02] rounded-r-lg">
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Education & Expertise - Expandable with better alignment */}
                <div className={`transition-all duration-500 overflow-hidden ${selectedMember === member.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="pt-6 border-t border-white/[0.1] space-y-6">
                    {/* Education - Improved layout */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0" />
                        <h4 className="font-semibold text-white text-sm">Education</h4>
                      </div>
                      <div className="space-y-2">
                        {member.education.map((edu: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-1 h-1 bg-white/40 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-white-200 text-xs leading-relaxed">{edu}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expertise - Better tag alignment */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-blue rounded-full flex-shrink-0" />
                        <h4 className="font-semibold text-white text-sm">Expertise</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-white/[0.05] text-white-200 text-xs rounded-full border border-white/[0.1] hover:border-purple/30 transition-colors whitespace-nowrap"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand Indicator - Better positioning */}
                <div className="flex justify-center mt-6 pt-4 border-t border-white/[0.05]">
                  <button
                    className="text-blue-100 hover:text-white transition-colors group/btn flex items-center space-x-2"
                    type="button"
                    aria-label={selectedMember === member.id ? 'Show less information' : 'Show more information'}
                  >
                    <span className="text-xs font-medium uppercase tracking-wider">
                      {selectedMember === member.id ? 'Show Less' : 'Learn More'}
                    </span>
                    <div className={`w-4 h-4 transition-transform duration-300 ${selectedMember === member.id ? 'rotate-180' : ''
                      }`}>
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Improved alignment */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="p-6 lg:p-8 rounded-3xl bg-gradient-to-r from-purple/10 via-black-200 to-blue/10 border border-white/[0.1] relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Ready to Put Our Collective Mind to Work?
              </h3>
              <p className="text-white-200 mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Four different approaches. One shared commitment to strategic excellence and your success.
              </p>
              <button
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple to-blue text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple/25 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                type="button"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;