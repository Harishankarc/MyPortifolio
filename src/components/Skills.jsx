import { Fade } from "react-awesome-reveal";

export default function Skills(){
    return (
        <div className="min-h-screen flex flex-col items-center md:justify-center" id="skills">
            <h1 className="text-3xl text-[#64ffda] heading-line flex items-center py-10 mb-10">Skills</h1>
            <div className="md:flex-row flex-col flex justify-between gap-20">
                <Fade cascade>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl text-[#64ffda] flex items-center mb-5">Languages</h1>
                        <div className="grid grid-cols-2 gap-4 p-5">
                            <i class="devicon-c-plain-wordmark colored text-7xl"></i>
                            <i class="devicon-cplusplus-plain colored text-7xl"></i>
                            <i class="devicon-java-plain colored text-7xl"></i>
                            <i class="devicon-javascript-plain colored text-7xl"></i>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl text-[#64ffda] flex items-center mb-5">Front-End</h1>
                        <div className="grid grid-cols-2 gap-4 p-5">
                            <i class="devicon-react-original colored text-7xl"></i>
                            <i class="devicon-tailwindcss-original colored text-7xl"></i>
                            <i class="devicon-html5-plain colored text-7xl"></i>
                            <i class="devicon-nextjs-original-wordmark text-7xl"></i>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl text-[#64ffda] flex items-center mb-5">Back-End</h1>
                        <div className="grid grid-cols-2 gap-4 p-5">
                            <i class="devicon-nodejs-plain-wordmark text-7xl"></i>
                            <i class="devicon-express-original-wordmark text-7xl"></i>
                            <i class="devicon-supabase-plain-wordmark colored text-7xl"></i>
                            <i class="devicon-mysql-plain-wordmark text-7xl"></i>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl text-[#64ffda] flex items-center mb-5">Tools</h1>
                        <div className="grid grid-cols-2 gap-4 p-5">
                            <i class="devicon-git-plain colored text-7xl"></i>
                            <i class="devicon-github-original-wordmark text-7xl"></i>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}