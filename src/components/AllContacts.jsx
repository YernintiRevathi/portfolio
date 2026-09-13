import Contact from "./Contact"

export default function AllContacts(){
    let email="reeshmayerninti@gmail.com";
    let contacts=[
        {
            type:"Email",
            markup:"",
            details:"reeshmayerninti@gmail.com",
            icon:"fa-regular fa-envelope"
        },
        {
            type:"LinkedIn",
            markup:"Connect with me on LinkedIn",
            details:"https://www.linkedin.com/in/yerninti-revathi/",
            icon:"fa-brands fa-linkedin-in"
        },
        {
            type:"GitHub",
            markup:"Check out my projects",
            details:"https://github.com/YernintiRevathi",
            icon:"fa-brands fa-github"
        },
        {
            type:"Location",
            markup:"",
            details:"India",
            icon:"fa-solid fa-location-dot"
        },
    ]
    return(
        <section id="contact">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <h2 className="bg-gradient-to-b from-blue-900 to-cyan-200 bg-clip-text text-transparent mt-4 text-2xl font-bold">Get In Touch</h2>
                <h5 className="mt-1 text-md font-semibold 
                    dark:text-white/50">I'm always open to discussing new opportunities, interesting projects.</h5>
                <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-2">
                    {
                        contacts.map((c,index)=>(
                            <Contact key={index} contact={c}/>
                        ))
                    }
                </div>
                <button className="mt-4"><a className="hover:bg-violet-500/90 text-sm text-white font-normal bg-violet-500 rounded-lg p-2" role="button" href={`mailto:${email}`}><i className="fa-regular fa-envelope"></i> Send me a mail</a></button>
            </div>
        </section>
    )
}