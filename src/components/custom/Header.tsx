import React from "react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { PiCards, PiPlus, PiX } from "react-icons/pi"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { CardSelector } from "./card/CardSelector"
import CardDialog from "./card/CardDialog"

export default function Header() {
    return (
        <div className="p-4 border-b-2 ">
            <div className="flex justify-between w-full">
                <Sheet>
                    <SheetTrigger className="space-y-2">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </SheetTrigger>
                    <SheetContent side={'left'}>
                        <SheetTitle className="font-bold text-3xl max-md:text-2xl ">Flashcard</SheetTitle>
                        <SheetDescription>select the topics below</SheetDescription>
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
 
