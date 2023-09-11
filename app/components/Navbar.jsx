import React from "react";
import { BsPin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center">
      <div>
        <input
          className="border-2 rounded-full text-center"
          type="text"
          placeholder="Search notes"
        />
      </div>
      <div>
        <BsPin />
        <HiDownload />
      </div>
      <div>
        <Link href="">Updates</Link>
        <Link href="">Shares</Link>
      </div>
    </nav>
  );
}
