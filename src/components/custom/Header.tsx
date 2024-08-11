import React from "react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { PiPlus} from "react-icons/pi"
import CardDialog from "./card/CardDialog"
import TopicList from "./TopicList"

export default function Header() {
    return (
        <div className="p-4 border-b-[1px] shadow-sm ">
            <div className="flex justify-between w-full">
                <Sheet>
                    <SheetTrigger className="space-y-2">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </SheetTrigger>
                    <SheetContent className="p-4 md:p-6" side={'left'}>
                        <div className="mb-64">
                            <SheetTitle className="font-bold text-3xl max-md:text-2xl ">Flashcard</SheetTitle>
                            <SheetDescription>select the topics below</SheetDescription>
                        </div>
                        <TopicList />
                    </SheetContent>
                </Sheet>
                <CardDialog 
                    crud={'create'}
                    triggerBtn={
                        <Button><PiPlus/>New Card</Button>
                    } 
                />
            </div>
        </div>
    )
};
 
