import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  return (
    <div className="w-full flex flex-1 justify-between sticky top-0 bg-background z-99 items-center p-1">
      <p className="font-semibold pl-4">Onebox</p>
      <div>
        <Select>
          <SelectTrigger className="w-[180px] focus:ring-0 border-none">
            <SelectValue placeholder="Tim's Workspace" />
          </SelectTrigger>
        </Select>
      </div>
    </div>
  );
}
