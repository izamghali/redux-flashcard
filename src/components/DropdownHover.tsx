import React from "react"

export default function DropdownHover({ children, svgIcon, className }: { children: any, svgIcon: any, className: string }) {
    return (
        <div className={`dropdown dropdown-hover ${className} `}>
            <div tabIndex={0} role="button" className="btn m-1">
                { svgIcon }
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                { children }
            </ul>
        </div>
    )
};

