'use client'
import { ToolTip } from "@/components/dynamic/ToolTip"
import CardDialog from "./CardDialog"
import { PiPencil, PiTrash } from "react-icons/pi"

export default function FlashCard() {

    function flipCard(event: React.MouseEvent<HTMLDivElement>) {
        const card = event.currentTarget
        
        if (card.classList.contains('[transform:rotateY(180deg)]')) {
            card.classList.remove('[transform:rotateY(180deg)]')
        } else card.classList.add('[transform:rotateY(180deg)]')

    }

    return (
        <ToolTip className="flip-card group relative justify-self-center max-w-96 h-52 w-full" content={'click to flip the card'}>
            <div onClick={flipCard} className="relative flip-card-inner duration-300 ease-in-out bg-transparent border-black cursor-pointer p-6 border-[1px] border-black/25 rounded-md h-full ">
                <div className="top-0 left-0 select-none flip-card-front absolute w-full h-full flex items-center justify-center">
                    <div className="absolute top-2 left-2 flex items-center gap-1">
                        <div className="bg-black/80 w-[0.4rem] h-[0.4rem] rounded-full"></div>
                        <span className="text-black/50 text-xs">front</span>
                    </div>
                    <span>front</span>
                </div>
                <div className="top-0 left-0 select-none flip-card-back absolute w-full h-full flex justify-center items-center">
                    <div className="absolute top-2 left-2 flex items-center gap-1">
                        <div className="bg-green-400/80 w-[0.4rem] h-[0.4rem] rounded-full"></div>
                        <span className="text-black/50 text-xs">back</span>
                    </div>
                    <span>back</span>
                </div>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center">
                <CardDialog crud={'edit'} triggerBtn={<div><PiPencil /></div>}/>
                <CardDialog crud={'delete'} triggerBtn={<div><PiTrash className=" fill-red-500" /></div>}/>
            </div>
        </ToolTip>

    )
};

