import React from "react"

export default function CardSide({ side, className }: { side: string, className: string }) {
    return (
        <div className="absolute top-2 left-2 flex items-center gap-1">
            <div className={`${ className } w-[0.4rem] h-[0.4rem] rounded-full`}></div>
            <span className="text-black/50 text-xs">{ side }</span>
        </div>
    )
};

