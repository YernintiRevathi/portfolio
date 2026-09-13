import { useState } from "react";

export default function Experience({work}){
    let [isopen,setIsopen]=useState(false);

    return(
        <div className=" lg:w-2/3 lg:mx-auto m-4 bg-white rounded-xl text-wrap
            dark:bg-violet-100/20 dark:text-white/90">
            <button className="cursor-pointer w-full px-4 sm:px-5 py-4 border-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 text-left" 
                type="button"
                onClick={()=>(setIsopen(p=>!p))}
            >
                <p className="font-bold">{work.role}</p> 
                <p className="flex font-normal items-center gap-2">
                    <span >{work.company}</span>
                    {isopen ? <i className="fa-solid fa-chevron-up shrink-0  ml-auto"></i> : <i className="fa-solid fa-chevron-down shrink-0 ml-auto"></i> }
                </p>
            </button>

            <div className={`grid transition-all duration-200 ease-in-out  ${isopen ? ' grid-rows-[1fr] pb-4 opacity-100 ' :' grid-rows-[0fr] opacity-0'}`}>
                <div className={`overflow-hidden w-full text-gray-600 text-start text-sm px-4 sm:px-5`}>
                    <p className="flex flex-row gap-2 items-center text-xs my-2">
                        <span className="bg-pink-600 font-bold text-white rounded-xl px-1 text-[11px]">{work.period}</span>
                        {work.isRemote && (<span className="remote bg-sky-300 rounded-xl px-2 font-semibold"><i className="fa-solid fa-location-dot"></i> Remote</span>)}
                    </p>
                    
                    <p className="mt-2 font-normal leading-relaxed
                        dark:text-white/90">{work.description}</p>

                    <div className="mt-2">
                        <p className="font-bold text-sm dark:text-white/90">Key Achievements:</p>{
                        work.achievements.map((a,index)=>(
                            <div key={index} className="flex flex-start gap-2 font-normal
                                dark:text-white/90">
                                <i className="fa-regular fa-circle-check text-sm text-lime-600 mt-1 shrink-0"></i> 
                                <p className="min-w-0 flex-1 leading-relaxed">{a}</p>
                            </div>
                        ))
                    }</div>

                    <div className="mt-2 flex flex-row flex-wrap gap-2">
                        <span className="font-bold text-sm dark:text-white/90">Technologies Used:</span> {
                        work.technologies.map((t,index)=>(
                            <span key={index} className="border border-cyan-200 bg-cyan-50/50 rounded-full text-xs font-bold flex items-center px-1 py-0.5 text-cyan-500
                                dark:text-violet-300 dark:bg-violet-100/20 dark:border-violet-800">{t} </span>
                        ))
                    }</div>
                </div>
            </div>
        </div>
    )

}