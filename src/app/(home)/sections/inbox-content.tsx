import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function InboxContent({ activeMailData }: any) {
  return (
    <div className="w-full flex flex-col justify-between flex-1">
      <div className="w-full flex flex-col flex-1 overflow-auto">
        {activeMailData &&
          activeMailData?.map((item: any) => (
            <div
              key={item.id}
              className="p-4 flex flex-col gap-2 border-b-2 cursor-pointer"
            >
              <div className="flex justify-between gap-4">
                <div className="">
                  <p>{item.fromEmail}</p>
                  <p>{item.body}</p>
                </div>
                <span>7 Mar</span>
              </div>
            </div>
          ))}
      </div>

      <div>
        {" "}
        <Dialog>
          <DialogTrigger asChild>
            <Button>Reply</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <DialogTitle className=" p-4">Reply</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2 border px-4">
                <Label htmlFor="name" className="text-right ">
                  To
                </Label>
                <Input
                  id="name"
                  className="w-full border-none outline-none focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2 border px-4">
                <Label htmlFor="username" className="text-right">
                  From
                </Label>
                <Input
                  id="username"
                  className="w-full border-none outline-none focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2 border px-4">
                <Label htmlFor="username" className="text-right">
                  Subject
                </Label>
                <Input
                  id="username"
                  className="w-full border-none outline-none focus-visible:ring-0"
                />
              </div>
              <div className="flex items-start gap-2 border px-4">
                <Textarea
                  id="username"
                  className="w-full border-none outline-none focus-visible:ring-0 h-72"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
