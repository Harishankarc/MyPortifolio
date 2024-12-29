import pdfURL from '../assets/Resume.pdf'
import {Fade,Bounce} from 'react-awesome-reveal';
export default function Home(){
    function ButtonOnClick(){
        window.open(pdfURL, "_blank");
    }
    return(
        <div className="h-[90vh] flex  justify-center items-center">  
            <div className="">
                <Fade><p className="text-[#64ffda] text-lg py-2">Hi, my name is </p></Fade>
                <Fade><p className="text-7xl  py-2">Harishankar c.</p></Fade>
                <Fade><p className="text-7xl text-[#8892b0] py-2">Full Stack Developer.</p></Fade>
                <Fade><p className="text-[#8892b0] text-lg py-1">I'm a full stack developer specializing in building and </p></Fade>
                <Fade><p className="text-[#8892b0] text-lg py-1">designing exeptional web appliactions.Currently, I'm focused on </p></Fade>
                <Fade><p className="text-[#8892b0] text-lg py-1">building user-friendly, efficent <a href="" className="text-[#64ffda]">projects</a>.</p></Fade>
                <Bounce triggerOnce><button className="text-[#64ffda] px-5 py-3 rounded-md bg-transparent border border-[#64ffda] mt-10 hover:bg-[#64ffda] hover:text-black" onClick={ButtonOnClick}>Check out my Resume!</button></Bounce>
            </div>
        </div>
    );
}