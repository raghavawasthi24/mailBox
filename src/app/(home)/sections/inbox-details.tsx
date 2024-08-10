import { LucideMailOpen } from "lucide-react";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function InboxDetails() {
  let leadDetails = [
    {
      name: "Name",
      value: "ohn Doe",
    },
    {
      name: "Contact No",
      value: "+54 -90890",
    },
    {
      name: "Email ID",
      value: "dwefg",
    },
    {
      name: "LinkedIn",
      value: "linkedin/raghav",
    },
    {
      name: "Company Name",
      value: "Reachinbox",
    },
  ];

  return (
    <div className="w-1/4 p-2 flex flex-col gap-8 bg-background">
      <div className="w-full flex flex-col gap-2">
        <p className="bg-[#ECEFF3] text-foreground w-full p-2">Lead Details</p>
        {leadDetails.map((item, index) => (
          <div key={index} className="flex justify-between">
            <p className="text-sm text-muted-foreground">{item.name}</p>
            <p className="text-sm font-medium">{item.value}</p>
          </div>
        ))}
      </div>

      <div>
        <div className={`bg-[#ECEFF3] text-foreground w-full p-2`}>
          Activities
        </div>
        <div className="p-4">
          <p className="font-semibold">Campaign Name</p>
          <p className="text-sm text-muted-foreground py-2">
            3 Steps | 5 Days in Sequence
          </p>

          <div className="flex flex-col gap-6 my-4">
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="w-10 h-10 p-2 border rounded-full" />
              <div>
                <p className="font-medium">Step 1: Email </p>
                <p className="flex text-muted-foreground items-center gap-2 text-sm">
                  <IoIosSend /> Send 3rd, Feb
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdOutlineEmail className="w-10 h-10 p-2 border rounded-full" />
              <div>
                <p className="font-medium">Step 2: Email </p>
                <p className="flex text-muted-foreground items-center gap-2 text-sm">
                  <LucideMailOpen /> Opened 5th, Feb
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdOutlineEmail className="w-10 h-10 p-2 border rounded-full" />
              <div>
                <p className="font-medium">Step 3: Email </p>
                <p className="flex text-muted-foreground items-center gap-2 text-sm">
                  <LucideMailOpen /> Opened 5th, Feb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
