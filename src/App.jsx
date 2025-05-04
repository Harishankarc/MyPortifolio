import { useEffect,useState } from "react";
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
  const [intro,setIntro] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIntro(false);
    },3000)
  })
  if(intro){
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#121212]">
        <div className="relative w-[90%] h-[90%] bg-[#050b14]">
          <video
            src={introVideo}
            autoPlay
            muted
            loop
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    );
  }else{
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
            <Skills/>
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
