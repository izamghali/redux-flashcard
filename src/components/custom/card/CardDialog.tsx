'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import React, { ReactElement, useState } from "react"
import { PiCards, PiFloppyDisk, PiPlus, PiTrash, PiX } from "react-icons/pi"
import { CardSelector } from "./CardSelector"
import { ToolTip } from "@/components/dynamic/ToolTip"
import CardInput from "./CardInput"
import { ICardType } from "@/lib/constants"

export default function CardDialog({ crud, triggerBtn }: { crud: 'create' | 'edit' | 'delete', triggerBtn: ReactElement }) {

    const [ selectedCardType, setSelectedCardType ] = useState<ICardType>();
    const [ dialogOpen, setDialogOpen ] = useState(false);

    function handleSubmitTest() {
        if (selectedCardType) console.log(selectedCardType)
    }

    function handleCreate() {

    }

    function handleUpdate() {

    }

    function handleDelete() {

    }

    return (
        <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
            { crud == 'create' ?
                <AlertDialogTrigger asChild className={`flex items-center gap-2 p-2 cursor-pointer duration-200 `}>
                { triggerBtn }
                </AlertDialogTrigger>
                :
                <ToolTip content={ crud == 'edit' ? 'edit flashcard' : 'delete flashcard' }>
                    <AlertDialogTrigger asChild className={`flex items-center gap-2 p-2 cursor-pointer duration-200 rounded-full hover:bg-black/10 `}>
                        { triggerBtn }
                    </AlertDialogTrigger>
                </ToolTip>
            }

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex justify-between font-bold">
                        <div className="flex items-center gap-2">
                            { crud == 'create' && <><PiCards/>Create New Flashcard</> }
                            { crud == 'edit' && <><PiCards/>Update Flashcard</> }
                            { crud == 'delete' && <><PiCards/>Delete Flashcard</> }
                        </div>
                        <AlertDialogCancel onClick={() => { setDialogOpen(false); setSelectedCardType(undefined) }} className="border-0"><PiX/> </AlertDialogCancel>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-left">
                        { crud == 'create' && <>Fill in the details to create new flashcard</> }
                        { crud == 'edit' && <>Modify the content to edit the flashcard</> }
                        { crud == 'delete' && <>Are you sure want to delete this flashcard?</> }
                    </AlertDialogDescription>
                </AlertDialogHeader>
                { crud == 'create' && <CardSelector setSelectedCardType={setSelectedCardType} /> }
                { crud == 'edit' && <CardSelector setSelectedCardType={setSelectedCardType} /> }

                {/* example for each type */}
                { crud == 'create' && <CardInput cardType={selectedCardType} /> }
                { crud == 'edit' && <CardInput cardType={selectedCardType} /> }
                
                <AlertDialogFooter>
                    { crud == 'create' && <AlertDialogAction className="flex items-center gap-2" onClick={handleCreate}><PiPlus/>Create New Card</AlertDialogAction> }
                    { crud == 'edit' && <AlertDialogAction className="flex items-center gap-2" onClick={handleCreate}><PiFloppyDisk />Update Card</AlertDialogAction> }
                    { crud == 'delete' && <AlertDialogAction className="flex items-center gap-2" onClick={handleCreate}><PiTrash/>Delete Card</AlertDialogAction> }
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    )
};

