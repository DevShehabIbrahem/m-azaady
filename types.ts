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

export interface IUserSubmit {
  main_category: string | null;
  sub_category: string | null;
  process_type: string | null;
  model: string | null;
  brand: string | null;
  type: string | null;
  transmission_type: string | null;
}
export interface IUserId {
  main_Id: string | null;
  sub_Id: string | null;
  process_Id: string | null;
  model_Id: string | null;
  brand_Id: string | null;
  type_Id: string | null;
  transmission_type_Id: string | null;
}

export interface IOptions {
  id: number;
  name: string;
}

export interface IModelData {
  code: number;
  data: { id: number; name: string; slug?: string; options: IOptions[] }[];
  msg: string;
}
