import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LeftSideBar from "./components/LeftSideBar";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import RightSideBar from "./components/RightSideBar";
import Skills from "./components/Skills";
import { Player } from 'video-react';
import introVideo from '../src/assets/intro.mp4'

export default function App() {
  const [intro, setIntro] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIntro(false);
    },3000)
  })
  if (intro) {
    return (
      <div className="w-screen aspect-video relative overflow-hidden flex justify-center items-center bg-[#121212] h-screen">
        <video
          src={introVideo}
          autoPlay
          muted
          loop
          className="md:w-1/2 md:h-1/2 object-cover"
        />
        <div className="relative top-0 right-10 w-[100px] h-full bg-[#121212]"></div>
      </div>



    );
  } else {
    return (
      <div className="h-auto bg-[#121212] flex flex-col">
        <Navbar />
        <div className="flex h-full">
          <div className="fixed left-0 top-0 h-full">
            <LeftSideBar />
          </div>
          <div className="flex-1 overflow-y-auto h-auto">
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
          </div>
          <div className="fixed right-0 top-0 h-full">
            <RightSideBar />
          </div>
        </div>
      </div>
    );
  }
}
