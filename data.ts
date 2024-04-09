import { INavbar, IProducts, IProfileInfo } from "./types";
import product from "./app/assets/pro1.jpg";
import product2 from "./app/assets/pro2.jpg";
import product3 from "./app/assets/pro 3.jpg";
import product4 from "./app/assets/pro4.jpg";
import product5 from "./app/assets/pro5.jpg";
import { LuUserCheck2, LuUsers } from "react-icons/lu";
import { SlStar } from "react-icons/sl";

export const Products: IProducts[] = [
  {
    img: product5,
    desc: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000 EGP",
    type: "Live auction",
    startTime: {
      days: 2,
      hours: 10,
      minutes: 50,
    },
    remainingTime: [
      { name: "2 days" },
      { name: "10 hours" },
      { name: "50 minutes" },
    ],
  },
  {
    img: product4,
    desc: "Antique wooden chest with intricate carvings...",
    price: "5000 EGP",
    type: "hot sale",
    startTime: {
      days: 3,
      hours: 5,
      minutes: 30,
    },
    remainingTime: [
      { name: "2 days" },
      { name: "10 hours" },
      { name: "50 minutes" },
    ],
  },
  {
    img: product3,
    desc: "Vintage vinyl record collection (50 records)...",
    price: "2000 EGP",
    type: "hot sale",
    startTime: {
      days: 1,
      hours: 2,
      minutes: 15,
    },
    remainingTime: [
      { name: "2 days" },
      { name: "10 hours" },
      { name: "50 minutes" },
    ],
    readIcon: true,
    activeSale: true,
  },
  {
    img: product2,
    desc: "Original oil painting by renowned artist...",
    price: "8000 EGP",
    type: "Live auction",
    startTime: {
      days: 0,
      hours: 1,
      minutes: 45,
    },
    remainingTime: [
      { name: "2 days" },
      { name: "10 hours" },
      { name: "50 minutes" },
    ],
  },
  {
    img: product,
    desc: "Rare first edition book collection (10 books)...",
    price: "3000 EGP",
    type: "hot sale",
    startTime: {
      days: 5,
      hours: 12,
      minutes: 0,
    },
    remainingTime: [
      { name: "2 days" },
      { name: "10 hours" },
      { name: "50 minutes" },
    ],
    readIcon: true,
  },
];
export const ProfileCardInfo: IProfileInfo[] = [
  {
    name: "Following",
    number: "5",
    icon: LuUserCheck2,
  },
  {
    name: "Followers",
    number: "20",
    icon: LuUsers,
  },
  {
    name: "Rate",
    number: "4.2",
    icon: SlStar,
    rate: "(15)",
  },
];

export const NavbarData: INavbar[] = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Blog",
  },
  {
    id: 3,
    name: "Gifts",
  },
];
