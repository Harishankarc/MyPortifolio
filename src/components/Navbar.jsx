import github from "../assets/githubIcon.png";
import { Slide } from "react-awesome-reveal";
export default function Navbar(){
    return (
        <>
            <div className="flex justify-between items-center bg-transparent py-5 px-10">
            <div>
                <Slide triggerOnce={true} direction="left">
                    <a href="#">
                        <p className="text-sm"><span className="text-[#64ffda]">&lt;</span> Hari <span className="text-[#64ffda]">/ &gt;</span></p>
                    </a>
                </Slide>
            </div>
            <div className="">
                <Slide direction="down" cascade={true} triggerOnce={true}>
                <ul className="flex gap-8 ">
                    <li className="hover:text-[#64ffda] hover:underline hover:underline-offset-8"><a href="#about">About</a></li>
                    <li className="hover:text-[#64ffda] hover:underline hover:underline-offset-8"><a href="#skills">Skills</a></li>
                    <li className="hover:text-[#64ffda] hover:underline hover:underline-offset-8"><a href="#project">Project</a></li>
                    <li className="hover:text-[#64ffda] hover:underline hover:underline-offset-8"><a href="#contact">Contact</a></li>
                </ul>
                </Slide>
            </div>
            <div className="group flex items-center gap-2">
                <p className="hidden absolute translate-x-[-50px] group-hover:block text-xs text-[#64ffda]">Github</p>
                <div className="w-8 p-0.5 ">
                    <Slide direction="right" triggerOnce={true}>
                        <a href="https://github.com/Harishankarc">
                            <img src={github} alt="" className="invert hover:border-[#64ffda] hover:border hover:rounded-full transition duration-200"/>
                        </a>
                    </Slide>
                </div>
            </div>
        </div>
        </>
    );
}