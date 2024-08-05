import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ICardType } from "@/lib/constants"
import clsx from "clsx"
import React from "react"
import { PiUploadSimple } from "react-icons/pi"

export default function CardInput({ cardType }: { cardType?: ICardType }) {

    return (
        <div className="space-y-4">
            <div>
                <Label></Label>
                <Input placeholder={`${ cardType == 'picture' ? 'What is the picture about?' : '' }`} />
            </div>
            <div>
                <Label></Label>
                <Input placeholder={`${ cardType == 'picture' ? 'What is the picture about?' : '' }`} />
            </div>
            { cardType == 'picture' && 
                <div className="grid w-full items-center gap-1">
                    <Label className="border-2 border-black/40 flex items-center gap-2 justify-center p-5 rounded-sm border-dashed cursor-pointer" htmlFor="picture"><PiUploadSimple size={`1.5rem`} /><span>Upload Picture</span></Label>
                    <Input className="hidden" id="picture" type="file" />
                </div>
            }
        </div>
    )
};

