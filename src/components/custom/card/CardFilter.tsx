"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PiFunnel } from "react-icons/pi"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function CardFilter() {
  const [gappedSentence, setGappedSentence] = React.useState<Checked>(true)
  const [synonym, setSynonym] = React.useState<Checked>(false)
  const [antonym, setAntonym] = React.useState<Checked>(false)
  const [translate, setTranslate] = React.useState<Checked>(false)
  const [definition, setDefinition] = React.useState<Checked>(false)
  const [picture, setPicture] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-2 items-center"><PiFunnel />Type</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem className="cursor-pointer" checked={gappedSentence} onCheckedChange={setGappedSentence} >
                Gapped Sentences
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="cursor-pointer" checked={synonym} onCheckedChange={setSynonym}>
                Synonym
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="cursor-pointer" checked={antonym} onCheckedChange={setAntonym}>
                Antonym
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="cursor-pointer" checked={translate} onCheckedChange={setTranslate}>
                Translate
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="cursor-pointer" checked={definition} onCheckedChange={setDefinition}>
                Definition
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="cursor-pointer" checked={picture} onCheckedChange={setPicture}>
                Picture
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
