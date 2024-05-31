import React from "react"
import Button from "./Button"

export default function DynamicAddModal({ children, modalID, modalTitle }: { children: any, modalID: string, modalTitle: string }) {
    return (
        <div>
            <dialog id={modalID} className="modal">
            <div className="modal-box flex flex-col ">
                <h3 className="font-bold text-lg">{ modalTitle }</h3>
                { children }
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </div>
    )
};

