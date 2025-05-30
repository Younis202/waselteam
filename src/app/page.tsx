"use client";


import Hero from "../components/Hero";
// import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Services from "@/components/Services";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
// import CaseStudies from "@/components/CaseStudies";
// import AboutSection from "@/components/AboutSection";
// import TeamSection from "@/components/TeamSection";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        {/* <Clients />
        <Services />
        <Grid />
        <CaseStudies />
        <RecentProjects />
        <TeamSection />
        <Experience />
        <AboutSection />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;