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

export function CardSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select card type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="gap">Gapped Sentence</SelectItem>
          <SelectItem value="antonym">Antonym</SelectItem>
          <SelectItem value="synonym">Synonym</SelectItem>
          <SelectItem value="definition">Defintion</SelectItem>
          <SelectItem value="translate">Translate</SelectItem>
          <SelectItem value="picture">Picture</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
