import profile from '../assets/profile.png'
import { Bounce, Fade } from 'react-awesome-reveal';

export default function About() {
    return(
        <div className="h-auto flex flex-col items-center" id='about'>
            <Fade cascade>
                <h1 className="text-3xl text-[#64ffda] heading-line flex items-center py-10 mb-20">About Me</h1>
                <div className='flex justify-between items-center gap-32'>
                    <div className='w-[20rem] h-[21rem] border'>
                        <div className='border border-[#64ffda] translate-y-3 translate-x-3 h-[21rem]'>
                            <Fade>
                                <img src={profile} alt="profile-picture" className=' translate-y-[-10rem]'/>
                            </Fade>
                        </div>
                    </div>
                    <div>
                        <Fade cascade>
                            <p className="w-[30rem] text-lg"> <span className="text-[#64ffda] text-xl">H</span>ey guys, as a front-end web and app developer, I specialize in creating intuitive, dynamic user experiences across
                            platforms. With expertise in <span className="text-[#64ffda]">React JS</span> ,<span className="text-[#64ffda]">Express JS</span> ,<span className="text-[#64ffda]">Tailwind CSS</span>, I transform creative concepts into user-centric, highperformance digital solutions. I stay up-to-date with industry trends and am dedicated to delivering
                            responsive designs that meet both user needs and corporate goals.</p>
                            <a href="mailto:charishankar30@gmail">
                                <Bounce>
                                    <button className="text-[#64ffda] px-5 py-3 rounded-md bg-transparent border border-[#64ffda] mt-10 hover:bg-[#64ffda] hover:text-black">Hire Me</button>
                                </Bounce>
                            </a>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    );
}