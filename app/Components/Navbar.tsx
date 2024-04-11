import React from "react";
import logo from "../assets/logo.png";
import pic from "../assets/profile.jpg";
import Image from "next/image";
import { NavbarData } from "@/data";
import { RiAddCircleLine, RiEnglishInput, RiSearch2Line } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import Button from "../UI/Button";
import { CiMenuBurger } from "react-icons/ci";

type Props = {};

const Navbar = (props: Props) => {
  const NavbarTabs = NavbarData.map(({ name, id }) => (
    <li
      key={id}
      className="p-4 border-b-4 text-[#828282] border-[#D20653] border-opacity-0 hover:border-opacity-100 hover:text-[#D20653] duration-200 cursor-pointer"
    >
      <a href="">{name}</a>
    </li>
  ));

  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-20">
      <div className="flex items-center gap-2 lg:gap-12">
        <a href="" className="flex lg:hidden">
          <CiMenuBurger size={20} />
        </a>
        <a href="">
          <Image src={logo} alt="logo" className="w-[8rem]" />
        </a>

        <nav className="nav font-semibold text-lg">
          <ul className="hidden md:flex items-center">{NavbarTabs}</ul>
        </nav>
      </div>

      <div className=" flex justify-end gap-5 items-center">
        <a href="">
          <RiSearch2Line size={25} />
        </a>

        <a href="">
          <IoNotificationsOutline size={25} />
        </a>

        <a href="">
          <Image
            src={pic}
            alt="logo"
            className="w-[3rem] h-[3rem] rounded-full object-cover"
          />
        </a>
        <div className="hidden lg:flex items-center gap-3">
          <Button width="w-fit">
            <div className="flex items-center gap-4 justify-center">
              {" "}
              <RiAddCircleLine />
              <span>Add new product</span>
            </div>
          </Button>
          <a href="">
            <GrLanguage size={20} />
          </a>

          <a href="">
            <RiEnglishInput size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
