import { useState } from "react";

export default function Education({education}){
    return(
        <div className="flex flex-col hover:border hover:border-violet-500 bg-white mb-3 p-4 rounded-xl
            dark:bg-violet-100/20 dark:text-white/90">
            <h2 className="text-slate-600 text-center font-bold text-md
                dark:text-white/90">{education.title}</h2>

            <div className="flex flex-1 flex-col justify-between text-gray-600 text-start text-sm px-2 pb-3">
                <p className="flex justify-center items-center text-xs my-2">
                    <span className="border border-violet-200 bg-violet-50/50 text-violet-500 font-semibold rounded-xl px-1 py-0.5 text-[11px]
                        dark:text-violet-300 dark:bg-violet-100/20 dark:border-violet-800">{education.period}</span>
                </p>
                
                <p className="text-center mt-2 text-wrap text-xs font-normal
                    dark:text-white/90">{education.college}</p>
                <p className="text-center mt-2 text-wrap text-xs font-normal
                    dark:text-white/90">{education.percentage ? <span className="font-bold">Percentage: {education.percentage}</span> : <span className="font-bold">CGPA: {education.cgpa}</span>}</p>
            </div>
        </div>
    )
}