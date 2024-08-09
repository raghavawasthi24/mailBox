import Image from "next/image";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaUserShield } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaInbox } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";

export default function Sidepanel() {
  return (
    <div className="w-12 h-screen bg-[#FAFAFA] flex flex-col items-center py-2 px-1">
      <Image src="/logo.png" alt="logo" width={26} height={26} />

      <div className="flex flex-col items-center gap-6 pt-12">
        <IoMdHome className="w-5 h-5" />
        <FaUserShield className="w-5 h-5" />
        <IoMdMail className="w-5 h-5" />
        <IoIosSend className="w-5 h-5" />
        <AiOutlineMenuFold className="w-5 h-5" />
        <FaInbox className="w-5 h-5" />
        <IoMdStats className="w-5 h-5" />
      </div>
      <div></div>
    </div>
  );
}
