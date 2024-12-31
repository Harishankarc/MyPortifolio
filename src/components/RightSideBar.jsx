import { Instagram, Github, Twitter, Linkedin } from "lucide-react";

export default function RightSideBar() {
  return (
    <div className="h-[90vh] hidden md:flex flex-col items-center justify-end">
      <div className="flex flex-col items-center justify-center space-y-10 mr-10 icons-container">
        <a href="mailto:charishankar30@gmail">
            <p style={{writingMode: "vertical-rl"}} className="tracking-widest text-[#8892b0] hover:text-[#64ffda] text-sm ">charishankar30@gmail.com</p>
        </a>
      </div>
    </div>
  );
}
