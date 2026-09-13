import ProfessionalPic from "../assets/professional_pic.jpeg";
import HeroBackground from "../assets/hero_background.jpeg";
import Navbar from "./Navbar";

export default function HeroSection(){
    let email="reeshmayerninti@gmail.com";
    let linkedin="https://www.linkedin.com/in/yerninti-revathi";
    let github="https://github.com/YernintiRevathi";
    let leetcode="https://leetcode.com/u/RevathiYerninti/";

    return(
        <section id="home">
            <div>
                <div className="hero w-full flex flex-col items-center bg-[50%_50%] bg-cover justify-center pt-[10vh] h-120"
                    style={{backgroundImage : `url(${HeroBackground})`}}>
                    <Navbar/>
                    <div className="hover:border-3 hover:border-gray-100/0 w-[150px] h-[150px] border rounded-full relative">
                        <img className="top-0 left-0 h-full w-full absolute object-cover object-center rounded-full" src={ProfessionalPic}/>
                    </div>
                    <div className="text-white">
                        <h1 className="mb-1 text-black font-semibold text-3xl">Revathi Yerninti</h1>
                        <h2 className="text-xl text-black font-semibold"> Full Stack Developer | Machine Learning Programmer</h2>
                        <p className="font-normal">Passionate about building innovative applications with AI/ML integration, full-stack development, and creating scalable solutions.</p>
                        <div className="buttons flex flex-row gap-2 justify-center my-3">
                            <button><a className="hover:bg-mauve-400 text-sm font-normal bg-mauve-500 rounded-lg p-2" role="button" href={`mailto:${email}`}><i className="fa-regular fa-envelope"></i> Email</a></button>
                            <button><a className="hover:bg-blue-400 text-sm font-normal bg-blue-500 rounded-lg p-2" role="button" href={linkedin}><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a></button>
                            <a className="hover:bg-gray-600 text-sm font-normal bg-black rounded-lg p-2" role="button" href={github}><i className="fa-brands fa-github"></i> GitHub</a>
                            <a className="hover:bg-yellow-400 text-sm font-normal bg-yellow-600 rounded-lg p-2" role="button" href={leetcode}><i className="fa-solid fa-code"></i> Leetcode</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}