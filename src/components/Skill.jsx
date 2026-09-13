export default function Skill({skill}){
    return(
        <div className="hover:border hover:border-violet-500 bg-white mb-3 p-6 rounded-xl
            dark:bg-stone-600 dark:text-white/90">
            <div className=" text-start">
                <h2 className=" font-semibold text-md"><i className={` animate-bounce [animation-duration:2s] bg-violet-50 text-sm text-violet-400 p-2 rounded-sm ${skill.icon}
                    dark:bg-violet-100/20`}></i>&nbsp; {skill.title}</h2>
                <div className=" flex flex-row flex-wrap gap-2 mt-3 text-xs">{
                    skill.list.map((s,index)=>(
                        <p key={index} className="flex items-center border border-cyan-200 bg-cyan-50/50 text-cyan-500 px-2 py-0.5 text-[12px] rounded-full font-semibold
                            dark:text-violet-300 dark:bg-violet-100/20 dark:border-violet-800">{s}</p>
                    ))}</div>
            </div>
        </div>
    )
}