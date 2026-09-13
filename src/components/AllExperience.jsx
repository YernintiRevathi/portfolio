import Experience from "./Experience";

export default function AllExperience(){
    let experiences=[
        {
            role:"GEN-AI Virtual Intern",
            company:"AICTE - Eduskills (AWS Academy)",
            period:"Oct 2025 - Dec 2025",
            isRemote:true,
            description:"Worked with Machine Learning fundamentals, NLP text processing, and Generative AI workflows through structured AWS Academy labs and real-world examples.",
            achievements:["Applied NLP text preprocessing techniques such as tokenization and normalization.",
                        "Understood end-to-end machine learning workflows, including data preparation and model training concepts.",
                        "Explored real-world use cases of Generative AI and modern AI applications."
                    ],
            technologies:["Python", "Machine Learning", "NLP", "Generative AI", "AWS Academy"]
        },
        {
            role:"Software Engineer Intern",
            company:"YugaYatra Retail (OPC) Pvt. Ltd.",
            period:"Sept 2025 - Nov 2025",
            isRemote:true,
            description:"Built a feature-rich frontend for an educational platform using React and TypeScript. Gained hands-on experience in building complex client-side features, including simulated user authentication, role-based dashboards, and a dummy payment system, while using Cursor AI to streamline development",
            achievements:["Built a client-side user/admin authentication and dashboard system.",
                        "Created a simulated multi-step payment flow for donations.",
                        "Implemented full internationalization (EN/HI) and theme switching."
                    ],
            technologies:["Firebase", "AI", "Cursor AI"]
        },
        {
            role:"Front End Web Development Intern",
            company:"Edunet Foundation (IBM SkillsBuild & AICTE)",
            period:"Aug 2025 - Oct 2025",
            isRemote:true,
            description:"Selected for an AICTE-endorsed internship focused on front-end web development. Completed extensive training modules via the IBM SkillsBuild platform and applied learnings to develop and deploy a dynamic, responsive 'Smart Study Planner' web application from scratch under the guidance of industry mentors.",
            achievements:["Developed a 'Smart Study Planner' web app using Vanilla JavaScript, HTML5, and CSS3.",
                        "Implemented dynamic task sorting, multi-list management, and Local Storage.",
                        "Earned 8 IBM certifications in front-end development technologies.",
                        "Designed a responsive, mobile-first UI and collaborated with mentors on best practices."
                    ],
            technologies:["JavaScript (ES6+)","CSS3 (Flexbox, Responsive Design)", "HTML5", "DOM Manipulation", "Local Storage", "FullCalendar.js"]
        }
    ]
    return(
        <section id="experience">
            <div>
                <h2 className="bg-gradient-to-b from-blue-900 to-cyan-200 bg-clip-text text-transparent mt-4 text-2xl font-bold">Professional Experience</h2>
                <h5 className="mt-1 text-md font-semibold 
                    dark:text-white/50">My journey in software development, building expertise in full-stack and machine learning.</h5>
                {
                    experiences.map((e,index)=>(<Experience key={index} work={e}/>))
                }
                
            </div>
        </section>
    )
}