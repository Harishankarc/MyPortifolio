import { Github,SquareArrowOutUpRight } from "lucide-react";
import Cartella from '../assets/Cartella.png'
import expensetracker from '../assets/expensetracker.png'
import pizzahut from '../assets/pizzaHutClone.png'
import { Fade,Slide } from "react-awesome-reveal";
export default function Project(){
    return(
        <div className="min-h-screen flex flex-col items-center" id="project">
            <h1 className="text-3xl text-[#64ffda] heading-line flex items-center py-10 mb-10">Some Things I’ve Built</h1>
            <div className="flex flex-col items-center gap-32">
                <Fade cascade>
                    <div className="flex justify-between items-center ">
                        <div className="w-[40rem] border">
                            <div className="border border-[#64ffda] translate-x-2 translate-y-[-0.5rem]">
                                <img src={Cartella} alt="cartella image" className="p-2 saturate-0 hover:saturate-100 transition duration-200 cursor-pointer"/>
                            </div>
                        </div>
                        <Slide direction="right">
                            <div className="w-[30rem] flex flex-col justify-center items-end translate-x-[-8rem]">
                                <p className="text-sm text-[#64ffda]">Featured Project</p>
                                <p className="text-3xl text-[#8892b0] hover:text-[#64ffda] cursor-pointer pb-2">Cartella</p>
                                <div className="text-[#8892b0] bg-slate-900 p-5 rounded-lg">
                                    <p className="text-end text-sm">A full-stack e-commerce application enabling users to browse and purchase items, using <span className="text-[#64ffda]">React JS</span> for the front-end, <span className="text-[#64ffda]">Express JS</span> for the back-end, <span className="text-[#64ffda]">SQL</span> for database management, authentication and user management.</p>
                                </div>
                                <ul className="flex gap-5 mt-2 text-sm">
                                    <li>React JS</li>
                                    <li>Express JS</li>
                                    <li>SQL</li>
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
                    </div>
                    <div className="flex justify-between items-center">
                        <Slide direction="left">
                            <div className="w-[30rem] flex flex-col justify-center items-start translate-x-[8rem] z-10">
                                <p className="text-sm text-[#64ffda]">Featured Project</p>
                                <p className="text-3xl text-[#8892b0] hover:text-[#64ffda] cursor-pointer pb-2">Expense Tracker</p>
                                <div className="text-[#8892b0] bg-slate-900 p-5 rounded-lg">
                                    <p className="text-start text-sm">The Expense Tracker App, built with <span className="text-[#64ffda]">ReactJS</span>, <span className="text-[#64ffda]">Supabase</span>, and <span className="text-[#64ffda]">Tailwind CSS</span>, helps users manage finances by adding income and expenses, analyzing trends with <span className="text-[#64ffda]">ChartJS</span>, and viewing recent activities. Its intuitive design ensures a seamless experience for tracking and understanding financial data.</p>
                                </div>
                                <ul className="flex gap-5 mt-2 text-sm">
                                    <li>React JS</li>
                                    <li>Supabase</li>
                                    <li>Tailwind CSS</li>
                                    <li>Chart JS</li>
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
                        <div className="w-[40rem] border z-[-999]">
                            <div className="border border-[#64ffda] translate-x-2 translate-y-[0.5rem]">
                                <img src={expensetracker} alt="cartella image" className="p-2 saturate-0 hover:saturate-100 transition duration-200 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div className="w-[40rem] border">
                            <div className="border border-[#64ffda] translate-x-2 translate-y-[-0.5rem]">
                                <img src={pizzahut} alt="cartella image" className="p-2 saturate-0 hover:saturate-100 transition duration-200 cursor-pointer"/>
                            </div>
                        </div>
                        <Slide direction="right">
                            <div className="w-[30rem] flex flex-col justify-center items-end translate-x-[-8rem]">
                                <p className="text-sm text-[#64ffda]">Featured Project</p>
                                <p className="text-3xl text-[#8892b0] hover:text-[#64ffda] cursor-pointer pb-2">PizzaHut Clone</p>
                                <div className="text-[#8892b0] bg-slate-900 p-5 rounded-lg">
                                    <p className="text-end text-sm">A Pizza Hut clone using <span className="text-[#64ffda]">ReactJS</span>, <span className="text-[#64ffda]">ExpressJS</span>, and <span className="text-[#64ffda]">Supabase</span> with a responsive UI for browsing menus, customizing orders, and managing authentication, showcasing expertise in full-stack development and real-time database integration.</p>
                                </div>
                                <ul className="flex gap-5 mt-2 text-sm">
                                    <li>React JS</li>
                                    <li>Express JS</li>
                                    <li>Supabase</li>
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
                    </div>
                </Fade>
            </div>   
        </div>
    );
}