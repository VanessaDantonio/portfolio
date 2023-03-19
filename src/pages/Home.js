import React from "react";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ffd700]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">Vanessa D'Antonio</h1>
        <h2 className="text-3xl sm:text-3xl font-bold text-[#8892b0]">I'm a Web Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[400px]">I'm a Front-End Web Developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
        <div>
          <button className="text-white border-2 px-[0.75rem] py-[0.375rem] text-[1rem] leading-6 rounded-md my-2 flex-items-center hover:bg-[#ffd700] hover:border-[#ffd700]">View Work</button>
        </div>
      </div>
    </div>
  );
}