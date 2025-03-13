"use client";

import BusinessDocForm from "@/components/onboarding/BusinessDocForm";
import Navbar from "@/components/onboarding/Navbar";
import Ownerinfo from "@/components/onboarding/Ownerinfo";
import Review from "@/components/onboarding/Review";
import SchoolInfo from "@/components/onboarding/SchoolInfo";
import SetupSchoolForm from "@/components/onboarding/SetupSchoolForm";

import Sidebar from "@/components/onboarding/Sidebar";
import { useOnboarding } from "@/contexts/onboarding-context";
import { sections } from "@/lib/sections";
import { useState } from "react";
const Onboarding = () => {
  const { activeIndex, setActiveIndex, goNextPage } = useOnboarding();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  
  return (
    <section className="relative flex max-w-[1740px] w-[100%] mx-auto gap-3 align-baseline ">
      <div
        className={`min-[700px]:block  hidden max-[700px]:w-[0%] w-[25%] max-w-[280px]`}
      >
        <Sidebar />
      </div>
      {isOpen && (
        <div className="fixed bg-black z-30 bg-opacity-70 max-[700px]:block hidden w-screen h-screen">
          <div
            onClick={toggleSidebar}
            className="cursor-pointer absolute top-0 bg-transparent w-screen h-screen"
          />
          <div className="bg-white max-[360px]:w-[100%] w-[280px]">
            <Sidebar />
          </div>
        </div>
      )}
      <main className="h-fit bg-white min-[850px]:bg-transparent max-[700px]:w-full w-[75%] px-10">
        <Navbar
          sections={sections}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          toggleSidebar={toggleSidebar}
          isOpen={isOpen}
        />
        
          {activeIndex === 0 && <SchoolInfo />}
          {activeIndex === 1 && <Ownerinfo />}
          {activeIndex === 2 && <BusinessDocForm />}
          {activeIndex === 3 && <SetupSchoolForm />}
          {activeIndex === 4 && <Review />}
        
      </main>
    </section>
  );
};

export default Onboarding;
