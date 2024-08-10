import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import DOMPurify from "dompurify";
import { BsFillReplyFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

export default function InboxContent({ activeMailData, currentUser }: any) {
  const [formvalues, setFormValues] = React.useState({
    to: currentUser.email,
    from: "mitrajit2022@gmail.com",
    subject: "",
    body: "",
  });

  function handleChanges(e: any) {
    setFormValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formvalues);
  }

  return (
    <div className="w-full h-[calc(100vh-48px-58px)] overflow-auto flex flex-col justify-between flex-1 bg-muted4">
      <div className="w-full flex flex-col p-4 gap-4 mb-[64px]">
        {activeMailData &&
          activeMailData.map((item: any) => {
            const sanitizedBody = DOMPurify.sanitize(item.body);

            return (
              <div
                key={item.id}
                className="p-4 flex flex-col gap-2 cursor-pointer bg-muted5 border rounded-lg"
              >
                <p className="font-semibold">{item.subject}</p>
                <p className="text-sm text-muted-foreground">{`from: ${item.fromEmail}`}</p>
                <p className="text-sm text-muted-foreground">{`to: ${item.toEmail}`}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: sanitizedBody }}
                  className="py-4 text-sm"
                />
              </div>
            );
          })}
      </div>

      <div className="w-full absolute bottom-0 left-0 bg-muted4 z-999 p-4">
        <Dialog>
          <DialogTrigger asChild className="">
            <Button className="w-fit bg-gradient-to-r from-[#4B63DD] to-[#0524BF]  background: linear-gradient(to right, #4B63DD 100%, #0524BF 99%) text-white">
              <BsFillReplyFill className="w-4 h-4 mr-2" />
              Reply
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <DialogTitle className=" p-4">Reply</DialogTitle>
            </DialogHeader>
            <form className="flex flex-col gap-0" onSubmit={handleSubmit}>
              <div className="flex items-center gap-2 border px-4">
                <Label htmlFor="name" className="text-right ">
                  To
                </Label>
                <Input
                  id="to"
                  className="w-full border-none outline-none focus-visible:ring-0"
                  onChange={handleChanges}
                  value={formvalues.to}
                />
              </div>
              <div className="flex items-center gap-2 border px-4">
                <Label htmlFor="username" className="text-right">
                  From
                </Label>
                <Input
                  id="from"
                  className="w-full border-none outline-none focus-visible:ring-0"
                  onChange={handleChanges}
                  value={formvalues.from}
                />
              </div>
              <div className="flex items-center gap-2 border px-4">
                <Label htmlFor="username" className="text-right">
                  Subject
                </Label>
                <Input
                  id="subject"
                  className="w-full border-none outline-none focus-visible:ring-0"
                  onChange={handleChanges}
                  value={formvalues.subject}
                />
              </div>
              <div className="flex items-start gap-2 border px-4">
                <Textarea
                  id="body"
                  className="w-full border-none outline-none focus-visible:ring-0 h-72"
                  onChange={handleChanges}
                  value={formvalues.body}
                />
              </div>
              <DialogFooter className="w-full flex justify-start p-4">
                <Button className="self-start w-fit bg-gradient-to-r from-[#4B63DD] to-[#0524BF]  background: linear-gradient(to right, #4B63DD 100%, #0524BF 99%) text-white">
                  Send
                  <IoMdArrowDropdown className="w-4 h-4 ml-2" />
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
