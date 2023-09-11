import React from "react";
import Link from "next/link";
import { SiGiphy } from "react-icons/si";
import {MdAddCircle,MdOutlineDeveloperMode} from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { PiTrashSimple} from "react-icons/pi";
import {PiMusicNotesDuotone } from "react-icons/pi";
import {FaRegNoteSticky} from "react-icons/fa6";
import {GrAnnounce} from "react-icons/gr";
import {BsQuestionCircle} from "react-icons/bs";
import {LuLayoutDashboard} from "react-icons/lu";


export default function Sidebar() {
  return (
    <div className="p-6 lg:w-1/5 relative h-screen z-20 bg-gray-200">
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-bold mb-8">🌼 Tuyu Notes</h1>
      </div>
      <div className="flex my-6 gap-8">
        <SiGiphy className="text-base" />
        <h1 className="text-sm">Template</h1>
      </div>
      <div className="flex my-6 gap-8">
        <HiDownload className="text-base" />
        <h1 className="text-sm ">Import</h1>
      </div>
      <div className="flex my-6 gap-8">
        <PiTrashSimple className="text-base" />
        <h1 className="text-sm">Trash</h1>
      </div>
      <div className="my-12  ">
        <h1 className="justify-start text-sm uppercase text-gray-400">workspace</h1>
        <div className="flex my-6 gap-8">
          <FaRegNoteSticky className="text-base" />
          <h1 className="text-sm text-gray-400 ">Notes</h1>
        </div>
        <div className="flex my-6 gap-8">
          <LuLayoutDashboard className="text-base" />
          <h1 className="text-sm text-gray-400">Tasks</h1>
        </div>
        <div className="flex my-6 gap-8">
          <GrAnnounce className="text-base" />
          <h1 className="text-sm text-gray-400">Announcements</h1>
        </div>
        <div className="flex my-6 gap-8">
          <PiMusicNotesDuotone className="text-base" />
          <h1 className="text-sm text-gray-400">Music</h1>
        </div>
        <div className="flex my-6 gap-8">
          <BsQuestionCircle className="text-base" />
          <h1 className="text-base text-gray-400">Questions</h1>
        </div>
        <div className="flex my-6 gap-8">
          <LuLayoutDashboard className="text-base" />
          <h1 className="text-sm text-gray-400">Dashboard</h1>
        </div>
        <div className="flex my-6 gap-8">
          <MdOutlineDeveloperMode className="text-base" />
          <h1 className="text-sm text-gray-400">Development</h1>
        </div>
        <div className="flex my-6 gap-8">
          <LuLayoutDashboard className="text-base" />
          <h1 className="text-sm text-gray-400">Swift</h1>
        </div>
      </div>

      <div className="flex gap-6 absolute bottom-0 mb-14 ">
        <MdAddCircle className="text-xl" />
        <h1 className="text-sm">New Page</h1>
      </div>
    </div>
  );
}
