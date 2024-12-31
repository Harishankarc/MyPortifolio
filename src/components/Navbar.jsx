import github from "../assets/githubIcon.png";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
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
                        <ul className="hidden md:flex gap-8 ">
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
                                <img src={github} alt="" className="invert hover:border-[#64ffda] hover:border hover:rounded-full transition duration-200" />
                            </a>
                        </Slide>
                    </div>
                    <div>
                        <div>
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="text-white focus:outline-none"
                                >
                                    {isMenuOpen ? (
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div
                                className={`${isMenuOpen ? "block" : "hidden"
                                    } md:hidden absolute right-5 top-16 bg-gray-900 text-white rounded-lg shadow-lg py-3 text-lg w-40 h-auto z-2 text-center`}
                            >
                                <ul className="space-y-2 px-4">
                                    <li>
                                        <a
                                            href="#about"
                                            className="block hover:text-[#64ffda]"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#skills"
                                            className="block hover:text-[#64ffda]"
                                        >
                                            Skills
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#project"
                                            className="block hover:text-[#64ffda]"
                                        >
                                            Project
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            className="block hover:text-[#64ffda]"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


