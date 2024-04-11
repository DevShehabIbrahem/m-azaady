import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import QR from "../assets/QR.jpg";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";

const QrSections = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-gray-700 uppercase font-extrabold text-lg tracking-wider mb-2">
          QR Code
        </span>
        <div className="flex gap-3">
          {" "}
          <IoEyeOutline size={20} />
          <IoShareSocialOutline size={20} />
          <HiOutlineDocumentDownload size={20} />
        </div>
      </div>

      <div className="bg-[#ff961d30] flex items-center gap-2 text-[#333333] shadow  rounded-2xl py-2.5 text-[11px] font-medium leading-5 px-2">
        <HiOutlineDocumentDownload size={20} color="#FF951D" />
        Download the QR code or share it with your friends.
      </div>

      <div className=" mt-5 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 w-full h-[333px]  flex items-center justify-center">
        <div className="rounded-2xl w-[273px] h-[273px] bg-white">
          <div className="flex justify-center items-center flex-col">
            <Image src={logo} alt="logo" width={150} />
            <h3 className="text-lg font-semibold">Hala Ahmed</h3>
            <Image src={QR} alt="qr" width={150} />
            <span>Follow Us on Mazaady</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrSections;
