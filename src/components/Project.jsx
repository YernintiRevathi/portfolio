import { useState } from "react";

export default function Project({project}){
    let [isopen,setIsopen]=useState(false);
    // console.log(project);

    return(
        <div className="hover:border hover:border-violet-500 overflow-hidden relative text-wrap h-60 lg:w-2/3 lg:mx-auto m-4 p-3 bg-white rounded-xl
            dark:bg-stone-600 dark:text-white/90">
            <div className={`absolute inset-0 p-3 transition-all duration-300 ease-in-out
                ${isopen ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
                <div className={`overflow-y-auto h-full flex flex-col`}>
                    <div className="w-full flex flex-row flex-wrap justify-between text-gray-600 text-start  px-1 pb-2">
                        <h2 className="py-2 font-bold items-center
                            dark:text-white/90" >{project.title}</h2>

                        <p className="flex items-center text-xs">
                            <span className="border border-gray-400 font-semibold text-black rounded-xl px-1 text-[11px]
                                dark:text-white/90">{project.period}</span>
                        </p>
                    </div>
                    
                    <div className=" mt-2 flex-1 min-h-0 flex flex-col justify-between items-start gap-4">
                        <div className="flex flex-row flex-wrap gap-2">
                            <span className="font-bold text-sm">Technologies Used:</span> {
                            project.technologies.map((t,index)=>(
                                <span key={index} className="border border-cyan-200 bg-cyan-50/50 text-cyan-400 rounded-full text-xs font-bold flex items-center px-1 py-0.54
                                    dark:text-violet-300 dark:bg-violet-100/20 dark:border-violet-800">{t} </span>
                            ))
                        }</div>
                        
                        <div className="w-full flex flex-row justify-between items-center">
                            <button className=" cursor-pointer text-black/80 rounded-lg font-bold p-1 border-0 bg-cyan-400 flex items-center" 
                                type="button"
                                onClick={()=>(setIsopen(p=>!p))}
                            >Next &nbsp;<i className="fa-solid fa-arrow-right"></i></button>

                            <div className="flex flex-row flex-wrap gap-2">
                                <a className="text-sm font-normal hover:text-violet-500" href={project.code}><i className="fa-brands fa-github"></i> Source Code</a>
                                {
                                    project.demo!=="" && <a className="hover:text-violet-500 text-sm font-normal" href={project.demo}><i className="fa-solid fa-link"></i> Demo</a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`absolute inset-0 p-3 transition-all duration-300 ease-in-out
                    ${isopen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="h-full flex flex-col items-start gap-4">
                    <h2 className="pt-1 font-bold" 
                    >{project.title}</h2>
                    <p className="flex-1 min-h-0 w-full text-start overflow-y-auto text-wrap font-normal">{project.description}</p>
                    <button className=" cursor-pointer text-black/80 rounded-lg font-bold p-1 border-0 bg-cyan-400 flex items-center" 
                        type="button"
                        onClick={()=>(setIsopen(p=>!p))}
                    ><i className="fa-solid fa-arrow-left"></i> &nbsp; Back</button>
                </div>
            </div>
        </div>
    )
}