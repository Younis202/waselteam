"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaHandshake, FaCalendarCheck } from "react-icons/fa";

import { projects } from "../data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        <span className="text-purple">Real Moves. Real Impact.</span>
      </h1>
      <p className="text-center max-w-3xl mx-auto mb-10 text-lg">
        We don&apos;t just talk business development. We execute it. Here&apos;s a glimpse of what happens when you have the BD Mafia on your side.
      </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[36rem] h-[28rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="B.D.T. Case Study"
              href="#"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" width={500} height={300} />
                </div>
                <Image
                  src="/p1.jpeg"
                  alt="cover"
                  width={500}
                  height={500}
                  className="absolute top-0 left-0 object-contain  lg:rounded-2xl"
                />
                {/* Add stats overlay */}
                <div className="absolute top-4 right-4 bg-purple/80 text-white px-4 py-2 rounded-full z-20 font-bold">
                  {item.stats.value}
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              {/* Add timeline info */}
              <div className="flex items-center mt-3 text-sm" style={{ color: "#BEC1DD" }}>
                <FaCalendarCheck className="mr-2 text-purple" />
                <span>{item.timeline}</span>
              </div>

              <div className="flex items-center justify-between mt-5 mb-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">
                    <FaHandshake className="mr-2" />
                    <span>{item.stats.label}</span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-base md:text-xs text-sm text-purple">
                    Full Case Study
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;