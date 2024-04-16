import React from "react"

export default function Button({ text, svg, className } : { text: string, svg: any, className: string }) {
    return (
        <button className={`btn ${className} `}>
            { svg }
            { text }
        </button>
    )
};

