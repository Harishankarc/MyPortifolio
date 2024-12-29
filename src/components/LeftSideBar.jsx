import { Instagram, Github, Twitter, Linkedin } from "lucide-react";

export default function LeftSideBar() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-end">
      <div className="flex flex-col items-center justify-center space-y-6 ml-10 icons-container">
        <a href="https://github.com/Harishankarc" className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
          <Github size={24} />
        </a>
        <a href="https://www.instagram.com/haaaaariiiiiiii/" className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
          <Instagram size={24} />
        </a>
        <a href="https://x.com" className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
          <Twitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/harishankar-c-148453285/" className="text-[#8892b0] hover:text-[#64ffda] transition duration-200">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}
