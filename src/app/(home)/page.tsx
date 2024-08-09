import { Search } from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] h-screen flex">
      <div className="w-72 p-2 border flex flex-col gap-2">
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
      </div>
    </div>
  );
}
