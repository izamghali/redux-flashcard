import React from "react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { PiCards, PiPlus, PiX } from "react-icons/pi"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { CardSelector } from "./CardSelector"

export default function Header() {
    return (
        <div className="p-4">
            <div className="flex justify-between w-full">
                <Sheet>
                    <SheetTrigger className="space-y-2">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </SheetTrigger>
                    <SheetContent side={'left'}>
                        <h2 className="font-bold text-3xl max-md:text-2xl mb-10">Flashcard</h2>
                        topic list
                    </SheetContent>
                </Sheet>
                <AlertDialog>
                    <AlertDialogTrigger asChild className="flex items-center gap-2">
                        <Button><PiPlus/>New Card</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="flex justify-between font-bold">
                                <div className="flex items-center gap-2 ">
                                    <PiCards/>
                                    Create New Card
                                </div>
                                <AlertDialogCancel className="border-0 sm:hidden"><PiX/> </AlertDialogCancel>
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-left">Fill in the details to create new flashcard</AlertDialogDescription>
                        </AlertDialogHeader>
                        <div>
                            <CardSelector />
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="max-sm:hidden">Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
};

