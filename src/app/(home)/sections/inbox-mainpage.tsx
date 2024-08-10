import React from 'react';
import { Search } from "@/components/shared/Search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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

export default function InboxMain() {
  return (
    <div className="w-full">
      <div className="w-full bg-background flex justify-between items-center p-2">
        <div>
          <p>Raghav</p>
          <p>raghau@gmail.com</p>
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
    </div>
  );
}
