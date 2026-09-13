import Project from "./Project";

export default function AllProjects(){
    let projects=[
        {
            title:"StayInn– Full-Stack Property Rental Platform",
            period:"July 2026 - Aug 2026",
            technologies:["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Passport.js", "Bootstrap CSS"],
            code:"https://github.com/YernintiRevathi/styinn-rental",
            demo:"https://styinn.onrender.com/",
            description:"Architected a full-stack rental marketplace with RESTful routes for listings, reviews, and user management, using session based auth and custom middleware for owner-restricted edits. Integrated Cloudinary for image uploads and MapTiler geocoding, with Joi-based validation and centralized error handling",
        },
        {
            title:"RentNGo– Vehicle Rental Platform",
            period:"Dec 2024 - Feb 2025",
            technologies:["Flask", "SQLite", "JavaScript", "Python", "HTML", "CSS", "Bcrypt"],
            code:"https://github.com/YernintiRevathi/rentngo-vehicle-rental",
            demo:"https://rentngo-csta.onrender.com/",
            description:"Built a comprehensive rental management system with browsing, booking, and admin features. Implemented secure user authentication and role-based access control for customers and administrators. Designed responsive UI with Flask templating and modern CSS frameworks. Integrated real-time availability checking and booking confirmation system. Built admin dashboard for vehicle management, booking oversight, and user management."
        },
        {
            title:"Insite– Dark UX Pattern Detector (Hackathon Winner)",
            period:"Sep 2025",
            technologies:["JavaScript", "Python", "Flask", "NLP", "Scikit-learn", "Chrome APIs", "Blob API", "HTML", "CSS"],
            code:"https://github.com/YernintiRevathi/insite-dark-ux-detector",
            demo:"https://www.linkedin.com/posts/yerninti-revathi_teamwork-coding-hackathon2025-ugcPost-7376329701646135296-y6Ux/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD-bqOoB3rQXYILs1O-bGF7j9ENjyVDKtBg",
            description:"Developed a Chrome Extension to identify and expose deceptive 'dark UX patterns' and misleading subscription practices on websites. The tool highlights hidden buttons, pre-checked auto-renewal options, and confirm-shaming text using visual overlays. It implements NLP for misleading text detection and sentiment analysis to calculate a 'Transparency Score' for each webpage. The extension also offers actionable recommendations, one-click unsubscribe guides, and screenshot/report generation. Gamification and community feedback elements were integrated for continuous improvement.",
        },
        {
            title:"Violence Detection and Alert System",
            period:"June 2025 - Jan 2025",
            technologies:["Python", "TensorFlow", "MobileNetV2", "InsightFace", "OpenCV", "Multithreading"],
            code:"https://github.com/YernintiRevathi/violence-detection-and-alert-system",
            demo:"",
            description:"Built a real-time violence detection CNN (MobileNetV2 via transfer learning), achieving 90.07% accuracy and 0.91 precision on an augmented 11,073-image dataset. Architected a multithreaded pipeline with dual-threshold false-positive suppression, InsightFace identification, unknown face clustering, and async multi-channel alerts (SMS, call, email)"
        }
    ]
    return(
        <section id="projects">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <h2 className="bg-gradient-to-b from-blue-900 to-cyan-200 bg-clip-text text-transparent mt-4 text-2xl font-bold">Featured Projects</h2>
                <h5 className="mt-1 text-md font-semibold 
                    dark:text-white/50">A showcase of my work in full-stack development and machine learning integration.</h5>
                <div className=" mt-4 grid grid-cols-1 md:gap-2">
                    {
                        projects.map((p,index)=>(
                            <Project key={index} project={p}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}