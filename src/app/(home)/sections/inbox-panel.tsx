import { Search } from "@/components/shared/Search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { IoMdRefresh } from "react-icons/io";
import DOMPurify from "dompurify";

export default function InboxPanel({ data, setActiveMail, setCurrentUser }: any) {
  return (
    <div className="w-1/4 p-2 px-4 border flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <p className="text-lg font-semibold text-blue-500">All Inbox(s)</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="icon" className="bg-transparent">
          <IoMdRefresh className="h-4 w-4" />
        </Button>
      </div>

      <Search className="bg-[#F4F6F8]" placeholder="Search" />

      <div>
        {data &&
          data.map((item: any) => {
            const sanitizedBody = DOMPurify.sanitize(item.body);

            const tempElement = document.createElement("div");
            tempElement.innerHTML = sanitizedBody;
            const plainText =
              tempElement.textContent || tempElement.innerText || "";
            const previewText =
              plainText.length > 10
                ? plainText.slice(0, 10) + "..."
                : plainText;

            return (
              <div
                key={item.id}
                className="py-4 flex flex-col gap-2 border-b-2 cursor-pointer"
                onClick={() => {setActiveMail(item.threadId); setCurrentUser({name: item.fromName, email: item.fromEmail})}}
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-md">{item.fromEmail}</p>
                    <p dangerouslySetInnerHTML={{ __html: previewText }} className="text-sm"/>
                  </div>
                  <span className="text-muted-foreground text-xs">7 Mar</span>
                </div>

                <div className="flex gap-2">
                  <Badge className="text-[10px] font-normal">Interested</Badge>
                  <Badge className="text-[10px] font-normal">
                    Campaign Name
                  </Badge>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
