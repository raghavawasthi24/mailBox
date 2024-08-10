import { Search } from '@/components/shared/Search';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react'
import { IoMdRefresh } from 'react-icons/io';

export default function InboxPanel({data}:any) {

    console.log(data)
  return (
    <div className="w-[378px] p-2 border flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <Select>
          <SelectTrigger className="w-fit focus:ring-0 border-none bg-transparent">
            <SelectValue placeholder="All Inbox(s)" className="text-blue" />
          </SelectTrigger>
        </Select>
        <Button variant="outline" size="icon" className="bg-transparent">
          <IoMdRefresh className="h-4 w-4" />
        </Button>
      </div>

      <Search className="bg-[#F4F6F8]" placeholder="Search" />

      <div>

         {
            data && data?.map((item:any) => (
                <div key={item.id} className="p-4 flex flex-col gap-2 border-b-2 cursor-pointer">
                    <div className="flex justify-between gap-4">
                    <div className="">
                        <p>{item.fromEmail}</p>
                        <p>{item.body}</p>
                    </div>
                    <span>7 Mar</span>
                    </div>
    
                    <div className="flex gap-2">
                    <Badge className="text-[10px] font-normal">Interested</Badge>
                    <Badge className="text-[10px] font-normal">Campaign Name</Badge>
                    </div>
                </div>
                ))
         }


        {/* <div className="p-4 flex flex-col gap-2 border-b-2 cursor-pointer">
          <div className="flex justify-between gap-4">
            <div className="">
              <p>raghav@gmail.com</p>
              <p>I have tried a lot</p>
            </div>
            <span>7 Mar</span>
          </div>

          <div className="flex gap-2">
            <Badge className="text-[10px] font-normal">Interested</Badge>
            <Badge className="text-[10px] font-normal">Campaign Name</Badge>
          </div>
        </div> */}
      </div>
    </div>
  );
}
