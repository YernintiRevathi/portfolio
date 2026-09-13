export default function Certificate({certificate}){
    return(
        <div className="h-full flex flex-col hover:border hover:border-violet-500 bg-white p-3 rounded-xl
            dark:bg-violet-100/20 dark:text-white/90">
            <h2 className=" text-start font-semibold text-md">{certificate.title}</h2>

            <div className="flex flex-1 flex-col justify-between text-gray-600 text-start text-sm px-2 pb-2">
                <p className="flex items-center text-xs my-2">
                    <span className="border border-gray-200 bg-gray-50 text-gray-500 font-semibold rounded-xl px-1 py-0.5 text-[11px]
                        dark:text-violet-300 dark:bg-violet-100/20 dark:border-violet-800">{certificate.company}</span>
                </p>
                
                <a href={certificate.link} className="text-violet-500 mt-2 text-wrap text-xs font-normal
                    dark:text-white/90 dark:hover:text-violet-400"><i className="fa-solid fa-link"></i> View Certificate</a>
            </div>
        </div>
    )
}