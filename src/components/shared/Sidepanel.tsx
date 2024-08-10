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
    <div className="w-12 h-screen bg-muted2 border flex flex-col items-center py-2 px-1">
      <Image src="/logo.png" alt="logo" width={26} height={26} />

      <div className="flex flex-col items-center gap-6 pt-12">
        <IoMdHome className="w-5 h-5 text-muted3" />
        <FaUserShield className="w-5 h-5 text-muted3" />
        <IoMdMail className="w-5 h-5 text-muted3" />
        <IoIosSend className="w-5 h-5 text-muted3" />
        <AiOutlineMenuFold className="w-5 h-5 text-muted3" />
        <FaInbox className="w-5 h-5 text-muted3" />
        <IoMdStats className="w-5 h-5 text-muted3" />
      </div>
      <div></div>
    </div>
  );
}
