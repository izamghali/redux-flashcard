import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ICardType } from "@/lib/constants"
import React from "react"
import { PiUploadSimple } from "react-icons/pi"

export default function CardInput({ cardType, data }: { cardType?: ICardType, data?: string }) {

    return (
        <div>
            { cardType == 'picture' ?
                <div className="space-y-4">
                    <div>
                        <Label></Label>
                        <Input placeholder={`${ cardType == 'picture' ? 'What is the picture about?' : '' }`} />
                    </div>
                    <div className="grid w-full items-center gap-1">
                        <Label className="border-2 border-black/40 flex items-center gap-2 justify-center p-5 rounded-sm border-dashed cursor-pointer" htmlFor="picture"><PiUploadSimple size={`1.5rem`} /><span>Upload Picture</span></Label>
                        <Input className="hidden" id="picture" type="file" />
                    </div>
                </div>
                :
                <div className="space-y-4">
                    <div>
                        <Label>{ 
                            cardType == 'translate' && 'First word' || 
                            cardType == 'definition' && 'The word to define' ||
                            cardType == 'synonym' && 'First word' ||
                            cardType == 'antonym' && 'First word' ||
                            cardType == 'gap' && <span>Gapped sentence <span className="text-black/60 text-xs">*(keep the correct word inside the sentece)</span></span>
                        }</Label>
                        <Input placeholder={`${
                            cardType == 'translate' && 'gato' || 
                            cardType == 'definition' && 'reverie' ||
                            cardType == 'synonym' && 'hasty' || 
                            cardType == 'antonym' && 'forget' ||
                            cardType == 'gap' && "I'm really excited because I just got a promotion from the office. I'll have to work longer hours, but they pay me higher now."
                        }`} />
                    </div>
                    <div>
                        <Label>{
                            cardType == 'translate' && 'That word in another language' ||
                            cardType == 'definition' && 'The definition of the first word' ||
                            cardType == 'synonym' && 'The synonym of the first word' ||
                            cardType == 'antonym' && 'The opposite of the first word' ||
                            cardType == 'gap' && 'The correct'
                        }</Label>
                        <Input placeholder={`${
                            cardType == 'translate' && 'cat' || 
                            cardType == 'definition' && 'the state of dreamy meditation or fanciful musing' ||
                            cardType == 'synonym' && 'fast' || 
                            cardType == 'antonym' && 'remember' ||
                            cardType == 'gap' && 'promotion'
                        }`} />
                    </div>
                </div>
            }
        </div>
    )
};

