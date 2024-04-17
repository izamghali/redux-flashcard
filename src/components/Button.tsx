import React from "react"

interface IButton {
    text: string,
    svg?: any,
    className?: string
    OnClickFunc?: any
}

export default function Button({ text, svg, className, OnClickFunc } : IButton) {
    return (
        <button onClick={OnClickFunc} className={`btn ${className} `}>
            { svg }
            { text }
        </button>
    )
};

