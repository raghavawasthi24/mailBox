import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function InboxHead({ activeMailData, currentUser }: any) {
  return (
    <div className="w-full h-[58px] bg-background flex justify-between items-center p-2 border">
      <div>
        <p className="font-semibold">{currentUser.name}</p>
        <p className="text-xs text-muted-foreground">{currentUser.email}</p>
      </div>
      <div className="flex items-center gap-2">
        <Select defaultValue="complete">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="complete">Meeting Completed</SelectItem>
              <SelectItem value="incomplete">Metting Incomplete</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="icon" className="bg-transparent">
          <BsThreeDotsVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
