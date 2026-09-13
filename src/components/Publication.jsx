export default function Publication({publication}){
    return(
        <div className="hover:border hover:border-violet-500 bg-white m-2 p-6 rounded-xl
            dark:bg-stone-600 dark:text-white/90">
            <h2 className=" text-center font-semibold text-md">{publication.title}</h2>

            <div className="w-full text-gray-600 text-start text-sm px-2 pb-3">
                <p className="flex justify-center items-center text-xs my-2">
                    <span className="border border-violet-200 bg-violet-50/50 text-violet-500 font-semibold rounded-xl px-1 py-0.5 text-[11px]
                        dark:text-violet-300 dark:bg-violet-100/20 dark:border-violet-800">{publication.period}</span>
                </p>
                
                <p className="text-center mt-2 text-wrap text-xs font-normal
                    dark:text-white/90">{publication.description}</p>
            </div>
        </div>
    )
}