import Image from "next/image";
import React from "react";
import pic from "../assets/profile.jpg";
import { ProfileCardInfo } from "@/data";
import Button from "./Button";

type Props = {};

const InfoSection = (props: Props) => {
  const showRatsInfo = ProfileCardInfo.map((item) => (
    <div key={item.number}>
      <div className="bg-[#ff961d30] flex items-center gap-2 text-[#FF951D] shadow  rounded-2xl  text-sm font-medium leading-5 px-3">
        <item.icon size={20} />
        <div>
          <div className="text-black text-[11px] font-semibold">
            {item.number}
          </div>
          <div className="text-[9px]">{item.name}</div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col items-center">
      <a href="">
        <Image
          src={pic}
          alt="logo"
          className="w-[7rem] h-[7rem] rounded-3xl object-cover"
        />
      </a>
      <h1 className="text-xl font-bold py-2">Hala Ahmed</h1>
      <p className="text-gray-700 py-2">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
      <div className="mt-6 flex-col xl:flex-row  gap-4 flex justify-center">
        {showRatsInfo}
      </div>
      <Button className="mt-6" width="w-full">
        Follow
      </Button>
    </div>
  );
};

export default InfoSection;
