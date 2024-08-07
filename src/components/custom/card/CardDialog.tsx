'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import React, { ReactElement, useState } from "react"
import { PiCards, PiFloppyDisk, PiPlus, PiTrash, PiX } from "react-icons/pi"
import { CardSelector } from "./CardSelector"
import { ToolTip } from "@/components/dynamic/ToolTip"
import CardInput from "./CardInput"
import { ICardType } from "@/lib/constants"
import ExampleCard from "@/components/dynamic/ExampleCard"
import { Label } from "@/components/ui/label"

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

            <AlertDialogContent className="md:max-w-[40rem] overflow-scroll">
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
                { selectedCardType &&
                <div className="bg-slate-400/20 p-4 rounded-md space-y-1">
                    <Label>Preview example</Label>
                    { selectedCardType == 'translate' && <ExampleCard frontText={"gato"} backText={"cat"} /> }
                    { selectedCardType == 'definition' && <ExampleCard frontText={"reverie"} backText={"a state of dreamy meditation or fanciful musing"} /> }
                    { selectedCardType == 'synonym' && <ExampleCard frontText={"hasty"} backText={"fast"} /> }
                    { selectedCardType == 'antonym' && <ExampleCard frontText={"forget"} backText={"remember"} /> }
                    { selectedCardType == 'gap' && <ExampleCard frontText={"I'm really excited because I just got a ... from the office. I'll have to work longer hours, but they pay me higher now."} backText={"promotion"} /> }
                    { selectedCardType == 'picture' && <ExampleCard 
                        imgUrl="https://images.unsplash.com/photo-1465996140498-df84be101126?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        frontText={""} 
                        backText={"roller coaster"} /> 
                    }
                </div>
                }
                { selectedCardType &&
                <div>
                    { crud == 'create' && <CardInput cardType={selectedCardType} /> }
                    { crud == 'edit' && <CardInput cardType={selectedCardType} /> }
                </div>
                }
                
                <AlertDialogFooter>
                    { crud == 'create' && <AlertDialogAction className="flex items-center gap-2" onClick={handleCreate}><PiPlus/>Create New Card</AlertDialogAction> }
                    { crud == 'edit' && <AlertDialogAction className="flex items-center gap-2" onClick={handleCreate}><PiFloppyDisk />Update Card</AlertDialogAction> }
                    { crud == 'delete' && <AlertDialogAction className="flex items-center gap-2" onClick={handleCreate}><PiTrash/>Delete Card</AlertDialogAction> }
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    )
};

