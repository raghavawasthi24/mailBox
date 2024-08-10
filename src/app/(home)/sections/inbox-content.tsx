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
import DOMPurify from "dompurify";

export default function InboxContent({ activeMailData }: any) {
  return (
    <div className="w-full flex flex-col justify-between flex-1">
      <div className="w-full flex flex-col flex-1 overflow-auto p-4 gap-4">
        {activeMailData &&
          activeMailData.map((item: any) => {
            const sanitizedBody = DOMPurify.sanitize(item.body);

            return (
              <div
                key={item.id}
                className="p-4 flex flex-col gap-2 cursor-pointer bg-background rounded-md"
              >
                <p className="font-semibold">{item.subject}</p>
                <p className="text-sm text-muted-foreground">{`from: ${item.fromEmail}`}</p>
                <p className="text-sm text-muted-foreground">{`to: ${item.toEmail}`}</p>
                <div dangerouslySetInnerHTML={{ __html: sanitizedBody }} className="py-4 text-sm"/>
              </div>
            );
          })}
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
