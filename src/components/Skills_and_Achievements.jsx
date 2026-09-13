import Achievement from "./Achievement";
import Skill from "./Skill";

export default function Skills_and_Achievements(){
    let skills=[
        {
            title:"Programming Languages",
            list:["Python", "JavaScript", "Java", "C++", "C"],
            icon:"fa-solid fa-code",
        },
        {
            title:"Web Development",
            list:["HTML", "CSS", "Node.js", "Express.js","React.js"],
            icon:"fa-solid fa-globe",
        },
        {
            title:"Databases",
            list:["MySQL", "MongoDB", "SQLite"],
            icon:"fa-solid fa-database",
        },
        {
            title:"ML/CV",
            list:["TensorFlow", "OpenCV", "Scikit-learn"],
            icon:"fa-solid fa-brain",
        },
        {
            title:"Core CS",
            list:["DBMS", "Operating Systems", "Computer Networks", "Data Structure & Algorithms", "OOP"],
            icon:"fa-solid fa-laptop-code",
        },
        {
            title:"Tools",
            list:["Git/GitHub", "Firebase", "VS Code", "Cursor"],
            icon:"fa-solid fa-cloud"
        }
    ];

    let achievements=[
        {
            "title":"First Prize at Hackathon Sankalp",
            "period":"Sep 20-21, 2025",
            "description":"Achieved first place in a 24-hour hackathon held at MVGR College of Engineering. Developed a Chrome Extension using JavaScript and NLP to detect and highlight dark UX patterns on websites, helping users avoid misleading subscriptions."
        },
        {
            "title":"750-Day LeetCode Streak",
            "period":"Ongoing",
            "description":"Demonstrated commitment to continuous learning through daily problem-solving. Solved 650+ problems, earning 30+ badges on Leetcode."
        },
        {
            "title":"HackerRank Achievements",
            "period":"2024-2025",
            "description":"Achieved 5-star ratings in SQL and 4-star in Python. Completed intermediate and advanced certifications, showcasing proficiency in database querying and algorithmic problem-solving."
        }
    ];

    return(
        <section id="skills" className="max-w-6xl mx-auto px-4 py-6">
            <h2 className=" bg-gradient-to-b from-blue-900 to-cyan-200 bg-clip-text text-transparent mt-4 text-2xl font-bold">Skills &amp; Achievements</h2>
            <div className="w-full">
                <h4 className="my-4 text-xl text-center text-slate-600 font-bold
                    dark:text-white/60">Skills</h4>
                <h5  className="mt-1 text-md font-semibold 
                    dark:text-white/50">A comprehensive overview of my technical skills and notable achievements.</h5>
                <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">{
                    skills.map((s,index)=>{
                        // console.log(domain,v);
                        return <Skill key={index} skill={s}  />
                    })
                }</div>
            </div>
            <div className="w-full">
                <h4 className="my-4 text-xl text-center text-slate-600 font-bold
                    dark:text-white/60">Achievements</h4>
                <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 md:gap-5">
                    {
                        achievements.map((a,index)=>(
                            <Achievement key={index} achieve={a}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}