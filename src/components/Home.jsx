
import {Fade,Bounce} from 'react-awesome-reveal';
import MyButton from './MyButton';
export default function Home(){

    return(
        <div className="md:h-[90vh] min-h-[80vh] flex md:ml-0 md:mr-0 ml-10 mr-10 justify-center items-center">
            <div className="">

                <Fade><p className="text-[#64ffda] text-lg py-2">Hi, my name is </p></Fade>
                <Fade><p className="text-5xl md:text-7xl  py-2">Harishankar c.</p></Fade>
                <Fade><p className="text-5xl md:text-7xl text-[#8892b0] py-2">Full Stack Developer.</p></Fade>
                <Fade><p className="text-[#8892b0] text-lg py-1">I'm a full stack developer specializing in building and </p></Fade>
                <Fade><p className="text-[#8892b0] text-lg py-1">designing exeptional web appliactions. Currently, I'm focused on </p></Fade>
                <Fade><p className="text-[#8892b0] text-lg py-1">building user-friendly, efficent <a href="" className="text-[#64ffda]">projects</a>.</p></Fade>
                <Bounce triggerOnce><MyButton/></Bounce>
            </div>
        </div>
    );
}