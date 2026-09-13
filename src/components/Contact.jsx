export default function Contact({contact}){
    // console.log(contact);
    return (
        <div className="hover:border hover:border-violet-500 bg-white mb-3 p-6 rounded-xl  
            dark:bg-stone-600 dark:text-white/90">
            <div className="text-start">
                <h2 className=" font-bold text-md"><i className={`text-violet-400 text-xl mr-1 ${contact.icon}`}></i> {contact.type}</h2>
                <div className="px-2 py-0.5 text-sm font-normal text-wrap mt-3">
                    {
                        contact.markup==="" ? 
                            <p className="break-words">{contact.details}</p>
                            : <a className="hover:text-violet-500" href={contact.details}>{contact.markup}</a>
                    }
                </div>
            </div>
        </div>
    )
}