import profile from '../assets/profile.png'
import { Bounce, Fade } from 'react-awesome-reveal';

export default function About() {
    return(
        <div className="min-h-screen  md:h-auto flex flex-col items-center" id='about'>
            <Fade cascade>
                <h1 className="text-3xl text-[#64ffda] heading-line flex items-center py-10 mb-20">About Me</h1>
                <div className='flex flex-col md:flex-row md:flex justify-between items-center gap-32'>
                    <div className='w-[20rem] h-[21rem] border'>
                        <div className='border border-[#64ffda] translate-y-3 translate-x-3 h-[21rem]'>
                            <Fade>
                                <img src={profile} alt="profile-picture" className=' translate-y-[-10rem]'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='md:ml-0 md:mr-0 ml-10 mr-10'>
                        <Fade cascade>
                            <p className="md:w-[30rem] text-lg "> <span className="text-[#64ffda] text-xl">H</span>ey guys, as a front-end web and app developer, I specialize in creating intuitive, dynamic user experiences across
                            platforms. With expertise in <span className="text-[#64ffda]">React JS</span> ,<span className="text-[#64ffda]">Express JS</span> ,<span className="text-[#64ffda]">Tailwind CSS</span>, I transform creative concepts into user-centric, highperformance digital solutions. I stay up-to-date with industry trends and am dedicated to delivering
                            responsive designs that meet both user needs and corporate goals.</p>
                            <a href="mailto:charishankar30@gmail">
                                <Bounce>
                                    <button className="text-[#64ffda] px-5 py-3 rounded-md bg-transparent border border-[#64ffda] mt-10 hover:bg-[#64ffda] hover:text-black mb-40 md:mb-0">Hire Me</button>
                                </Bounce>
                            </a>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    );
}