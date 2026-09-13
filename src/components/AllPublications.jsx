import Publication from "./Publication";

export default function AllPublications(){
    let publications=[
        {
            "title":"Autonomous AI Surveillance: Real-Time Violence Detection, Facial Identification, and Automated Emergency Response",
            "period":"July, 2026",
            "description":"Presented at CIGAI 2026, Second International Conference on Mathematical Modeling in Computational Intelligence and Generative AI (Springer Publishing Partner), AITAM, Tekkali, Jul 2026"
        },
    ];

    return(
        <section id="publications" className="max-w-6xl mx-auto px-4 py-6">
            <h2 className=" bg-gradient-to-b from-blue-900 to-cyan-200 bg-clip-text text-transparent mt-4 text-2xl font-bold">Publications</h2>
                <div className=" mt-4 grid grid-cols-1">
                    {
                        publications.map((p,index)=>(
                            <Publication key={index} publication={p}/>
                        ))
                    }
                </div>
        </section>
    )
}