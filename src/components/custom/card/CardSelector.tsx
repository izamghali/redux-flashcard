import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ICardType } from "@/lib/constants"

export function CardSelector({ cardType, setSelectedCardType }: { cardType?: ICardType, setSelectedCardType: any }) {

    function printSelected(value: string) {
        if (value) setSelectedCardType(value)
    }

    return (
        <Select  defaultValue={cardType} onValueChange={printSelected}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select card type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="gap">Gapped Sentence</SelectItem>
                <SelectItem value="antonym">Antonym</SelectItem>
                <SelectItem value="synonym">Synonym</SelectItem>
                <SelectItem value="definition">Defintion</SelectItem>
                <SelectItem value="translate">Translate</SelectItem>
                <SelectItem value="picture">Picture</SelectItem>
            </SelectContent>
        </Select>
    )
}
