import { useState ,useEffect} from "react";
import "../css/Navbar.css";

export default function Navbar(){
    let [active,setActive]=useState("home");
    let [isOpen,setIsOpen]=useState(false);
    let [darkMode,setDarkMode]=useState(false);

    useEffect(()=>{
        const sections=["home", "experience", "skills", "projects", "education", "publications", "contact"];

        const handleScroll = () => {
            let currentSection = "home";

            sections.forEach((id) => {
                const section = document.getElementById(id);

                if (!section) return;

                const rect = section.getBoundingClientRect();

                // Section is visible in viewport
                if (
                    rect.top <= window.innerHeight * 0.4 &&
                    rect.bottom >= window.innerHeight * 0.4
                ) {
                    currentSection = id;
                }
            });

            setActive(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    function changeTheme(){
        setDarkMode(prev => !prev);
        document.documentElement.classList.toggle("dark");
        
        // adds/removes dark on the <html> element:
        // <html class="dark">
        // So every component on your page can respond to it.
    }

    return (
        <div className="w-full fixed pb-2 lg:pb-0 top-0 z-[100] bg-gray-100/70 text-black backdrop-blur-sm shadow-sm">
            <nav className="">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-row items-center h-16">
                        <a className="brand text-start pl-2 font-semibold text-xl tracking-wide" href="#">Revathi Yerninti</a>
                        <button className="ml-auto p-2 text-3xl lg:hidden" onClick={()=>(setIsOpen(p=>!p))}>
                            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                    
                        <div className={`grid transition-all duration-300 ease-in-out lg:flex lg:flex-row lg:items-center lg:w-full ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'lg:grid-rows-[1fr] lg:opacity-100 grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden flex flex-col lg:flex-row lg:items-center lg:w-full justify-end ">
                                <ul className="flex flex-col gap-3 mb-2 pb-2 text-sm font-normal lg:mb-0 lg:flex-row lg:gap-6 lg:ml-auto lg:py-0 ">
                                    <li><a className={`hover:text-gray-500 ${active==="home"? "active" : ""}`} onClick={()=>(setActive("home"))} href="#home">Home</a></li>
                                    <li><a className={`hover:text-gray-500 ${active==="experience"? "active" : ""}`} onClick={()=>(setActive("experience"))} href="#experience">Experience</a></li>
                                    <li><a className={`hover:text-gray-500 ${active==="skills"? "active" : ""}`} onClick={()=>(setActive("skills"))} href="#skills">Skills &amp; Achievements</a></li>
                                    <li><a className={`hover:text-gray-500 ${active==="projects"? "active" : ""}`} onClick={()=>(setActive("projects"))} href="#projects">Projects</a></li>
                                    <li><a className={`hover:text-gray-500 ${active==="education"? "active" : ""}`} onClick={()=>(setActive("education"))} href="#education">Education &amp; Certifications</a></li>
                                    <li><a className={`hover:text-gray-500 ${active==="publications"? "active" : ""}`} onClick={()=>(setActive("publications"))} href="#publications">Publications</a></li>
                                    <li><a className={`hover:text-gray-500 ${active==="contact"? "active" : ""}`} onClick={()=>(setActive("contact"))} href="#contact">Contact</a></li>
                                </ul>
                                <div className="flex flex-row justify-center items-center gap-3 lg:ml-6 lg:mr-2">
                                    <a href="/resume.pdf" download="Revathi_Yerninti_Resume.pdf" className="cursor-pointer hover:bg-cyan-300 text-sm bg-cyan-400 rounded-xl p-2 font-normal lg:ml-auto" ><i className="fa-solid fa-download"></i> Resume</a>
                                    <button
                                        onClick={changeTheme}
                                        className="cursor-pointer ml-1 p-2 rounded-sm hover:bg-gray-300 "><i className={`fa-regular ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </nav>
        </div>
    )
}