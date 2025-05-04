import { Github, SquareArrowOutUpRight } from "lucide-react";
import Cartella from '../assets/Cartella.png'
import RhythmBox from '../assets/Rhythmbox.png'
import expensetracker from '../assets/expensetracker.png'
import Sattva from '../assets/sattva.png'
import { Fade, Slide } from "react-awesome-reveal";
export default function Project() {
    const project = [
        {
            id:1,
            title:"Sattva",
            descrption: "Sattva is the official event website for the annual arts and sports festival of Cochin University College of Engineering Kuttanad, held on 28th and 29th February. Built using React JS for the front-end, Express JS and Node.js for the back-end, and SQLite for data management, the site features event schedules, participant information, and live updates. Hosted on AWS, it offers a responsive UI and smooth navigation, providing a seamless and engaging experience for festival attendees and participants.",
            image: Sattva,
            tech: ["React JS", "Express JS", "Node.js", "SQLite", "AWS"],
            link:"https://github.com/Harishankarc/Sattva25",
        },
        {
            id: 2,
            title: "RhythmBox",
            descrption: "RhythmBox is a full-featured music streaming application that allows users to explore, play, and like songs. Built using Flutter for the front-end and Node.js for the back-end, it uses SQLite for efficient local data storage and Supabase for authentication and user management.",
            image: RhythmBox,
            tech: ["Flutter", "Node.js", "SQLite", "Supabase","AWS"],
            link: "https://github.com/Harishankarc/RhythmBox",
        },{
            id:3,
            title: "Expense Tracker",
            descrption: "Expense Tracker is a simple web application that allows users to track their expenses. Built using React for the front-end and Node.js for the back-end, it uses MySQL for efficient local data storage and Supabase for authentication and user management.",
            image: expensetracker,
            tech: ["React", "Node.js", "MySQL", "Supabase"],
            link: "https://github.com/Harishankarc/Expense-Tracker",
        },{
            id:4,
            title: "Cartella",
            descrption: "a full-stack e-commerce application enabling users to browse and purchase items, using  React JS and Tailwind CSS for the front-end, Express JS for the back-end, SQL for database management, and Supabase for authentication and user management.",
            image: Cartella,
            tech: ["React JS", "Tailwind CSS", "Chart JS", "Supabase"],
            link: "https://github.com/Harishankarc/Cartella",
        }
    ]
    return (
        <div className="min-h-screen flex flex-col items-center" id="project">
            <h1 className="text-3xl text-[#64ffda] heading-line flex items-center py-10 mb-10 text-center ">Projects</h1>
            <div className="flex flex-col items-center gap-32">
                <Fade cascade>
                    {project.map((item) => {
                        if (item.id % 2 == 0) {
                            return (
                                <div className="flex md:flex-row flex-col-reverse justify-between items-center">
                                    <Slide direction="left">
                                        <div className="md:w-[30rem] flex flex-col justify-center z-10 md:items-start md:translate-x-[8rem] ml-10 mr-10 items-center md:mt-0 mt-10">
                                            <p className="text-sm text-[#64ffda]">Featured Project</p>
                                            <p className="text-3xl text-[#8892b0] hover:text-[#64ffda] cursor-pointer pb-2">{item.title}</p>
                                            <div className="text-[#8892b0] bg-slate-900 p-5 rounded-lg">
                                                <p className="text-start text-sm">{item.descrption}</p>
                                            </div>
                                            <ul className="flex gap-5 mt-2 text-sm">
                                                {item.tech.map((item) => {
                                                    return(
                                                        <li className="cursor-pointer hover:text-[#64ffda]">{item}</li>
                                                    );
                                                })

                                                }
                                            </ul>
                                            <div className="flex gap-2 mt-2">
                                                <a href="https://github.com/Harishankarc" className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
                                                    <Github size={20} />
                                                </a>
                                                <a href="https://github.com/Harishankarc" className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
                                                    <SquareArrowOutUpRight size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </Slide>
                                    <div className="md:w-[40rem] w-[22rem] border z-[-999]">
                                        <div className="border border-[#64ffda] translate-x-2 translate-y-[0.5rem]">
                                            <img src={item.image} alt="cartella image" className="p-2 saturate-100 transition duration-200 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="flex md:flex-row flex-col justify-between items-center ">
                                    <div className="md:w-[40rem] w-[22rem] border">
                                        <div className="border border-[#64ffda] translate-x-2 translate-y-[-0.5rem]">
                                            <img src={item.image} alt="cartella image" className="p-2 saturate-100 transition duration-200 cursor-pointer" />
                                        </div>
                                    </div>
                                    <Slide direction="right">
                                        <div className="md:w-[30rem] flex flex-col justify-center items-center md:items-end md:translate-x-[-8rem] ml-10 mr-10 md:mt-0 mt-10">
                                            <p className="text-sm text-[#64ffda]">Featured Project</p>
                                            <p className="text-3xl text-[#8892b0] hover:text-[#64ffda] cursor-pointer pb-2">{item.title}</p>
                                            <div className="text-[#8892b0] bg-slate-900 p-5 rounded-lg">
                                                <p className="text-end text-sm">{item.descrption}</p>
                                            </div>
                                            <ul className="flex gap-5 mt-2 text-sm">
                                                {item.tech.map((item) => {
                                                    return (
                                                        <li className="cursor-pointer hover:text-[#64ffda]">{item}</li>
                                                    );
                                                })}
                                            </ul>
                                            <div className="flex gap-2 mt-2">
                                                <a href={item.link} className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
                                                    <Github size={20} />
                                                </a>
                                                <a href="" className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
                                                    <SquareArrowOutUpRight size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            );
                        }
                    })

                    }


                </Fade>
            </div>
        </div>
    );
}