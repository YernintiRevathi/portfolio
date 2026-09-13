import Certificate from "./Certificate";
import Education from "./Education"

export default function Education_and_Certificates(){
    let education=[
        {
            title:"B.Tech — Computer Science & Engineering",
            college:"MVGR College of Engineering",
            period:"2022 - 2026",
            cgpa:"8.91/10",
        },
        {
            title:"Intermediate — MPC",
            college:"Sasi Junior College",
            period:"2020 - 2022",
            percentage:"98.5%",
        },
        {
            title:"SSC",
            college:"Catherine Public School",
            period:"2019 - 2020",
            percentage:"99.67%",
        },
    ];

    let certificates=[
        {
            title:"Web Development Fundamentals",
            company:"IBM SkillsBuild",
            link:"https://www.credly.com/badges/7a3707b7-8cad-4672-a6b9-eddc1ba50d80/public_url"
        },
        {
            title:"SQL Intermediate",
            company:"HackerRank",
            link:"https://www.hackerrank.com/certificates/iframe/9be7bb9bc092"
        },
        {
            title:"SQL Advanced",
            company:"HackerRank",
            link:"https://www.hackerrank.com/certificates/iframe/57bbfb28df27"
        },
        {
            title:"AWS ML Foundations",
            company:"Amazon Web Services",
            link:"https://www.credly.com/badges/fb381b27-da5f-4ce7-803c-ca632019e0e1/public_url"
        },
        {
            title:"AWS ML For Natural Language Processing",
            company:"Amazon Web Services",
            link:"https://www.credly.com/badges/922b5e0f-9753-4f0d-b9af-f293749179f2/public_url"
        },
        {
            title:"AWS Generative AI Foundations",
            company:"Amazon Web Services",
            link:"https://www.credly.com/badges/e6919b7b-cd77-4e88-a247-bd1d99f32a3d/public_url"
        },
    ];
    return(
        <section id="education">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="bg-gradient-to-b from-blue-900 to-cyan-200 bg-clip-text text-transparent mt-4 text-2xl font-bold">Education & Certifications</h2>
                <h5 className="mt-1 text-md font-semibold 
                    dark:text-white/50">My academic background and professional certifications.</h5>
                
                <div>
                    <h4 className="my-4 text-xl text-slate-600 font-bold dark:text-white/60"><i className="text-2xl text-violet-500 fa-solid fa-graduation-cap
                        dark:text-white/60"></i> Education</h4>
                    <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 md:gap-5">
                        {
                            education.map((e,index)=>(
                                <Education key={index} education={e}/>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h4 className="my-4 text-xl text-center text-slate-600 font-bold dark:text-white/60"><i className="text-2xl text-violet-500 fa-solid fa-award
                        dark:text-white/60"></i> Certifications</h4>
                    <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-stretch">
                        {
                            certificates.map((c,index)=>(
                                <Certificate key={index} certificate={c}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}