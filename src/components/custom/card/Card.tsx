'use client'
import { ToolTip } from "@/components/dynamic/ToolTip"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import CardDialog from "./CardDialog"
import { PiEraser, PiPencil, PiTrash } from "react-icons/pi"

export default function FlashCard() {

    function flipCard() {
        console.log('heelo')
    }

    return (
        <ToolTip className="relative justify-self-center max-w-96 h-52 w-full" content={'click to flip the card'}>
            <div onClick={flipCard} className={`border-black cursor-pointer p-6 border-2 rounded-md h-full flex items-center justify-center`}>
                <span className="select-none">Hello</span>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-2">
                <CardDialog crud={'edit'} triggerBtn={<div><PiPencil /></div>}/>
                <CardDialog crud={'delete'} triggerBtn={<div><PiTrash className=" fill-red-500" /></div>}/>
            </div>
        </ToolTip>
    )
};

