import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
interface IRemainingTime {
  name: string;
}
export interface IProducts {
  img: StaticImageData;
  desc: string;
  type: "Live auction" | "hot sale"; // Enumerate possible types
  startTime: {
    days: number;
    hours: number;
    minutes: number;
  };
  price: string;
  remainingTime: IRemainingTime[];
  readIcon?: boolean;
  activeSale?: boolean;
}
export interface IProfileInfo {
  name: string;
  number: string;
  icon: IconType;
  rate?: string;
}
export interface INavbar {
  id: number;
  name: string;
}
