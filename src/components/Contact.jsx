export default function Contact() {
    return (
        <div className="h-auto flex flex-col items-center mt-20 mb-20" id="contact">
            <h1 className="text-3xl text-[#64ffda] heading-line flex items-center py-10 mb-10">
                Get In Touch
            </h1>
            <div className="flex flex-col items-center gap-5">
                <input type="text" className="border border-gray-500 rounded px-4 py-2 w-80 text-sm outline-none focus:ring-0 text-white" placeholder="Your Name" />
                <input type="text" className="border border-gray-500 rounded px-4 py-2 w-80 text-sm outline-none focus:ring-0 text-white" placeholder="Your Email" />
                <input type="text" className="border border-gray-500 rounded px-4 py-2 w-80 text-sm outline-none focus:ring-0 text-white" placeholder="Your Message" />
                <button className="text-[#64ffda] px-5 py-2 w-full rounded-md bg-transparent border border-[#64ffda] text-sm hover:bg-[#64ffda] hover:text-black">Submit</button>
            </div>
        </div>
    );
}
