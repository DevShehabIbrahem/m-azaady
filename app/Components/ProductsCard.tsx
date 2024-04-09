import { IProducts } from "@/types";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import redheart from "../assets/icons8-heart-16.png";
import sale from "../assets/sale.png";
import active from "../assets/active.png";

type Props = {};

const ProductsCard = ({ item }: { item: IProducts }) => {
  const { desc, price, img, remainingTime, readIcon, activeSale } = item;

  const remaininghours = remainingTime.map(({ name }) => (
    <div>
      <div className="bg-[#ff961d40] text-[#FF951D] shadow w-full rounded-2xl py-1.5 text-sm font-medium leading-5 px-3">
        {name}
      </div>
    </div>
  ));
  return (
    <div className="my-10">
      <div className="flex  md:gap-[20rem] w-full">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="relative">
            {" "}
            <Image
              src={img}
              alt="product"
              className="w-[7rem] h-[7rem] rounded-3xl object-cover "
            />
            {activeSale ? (
              <Image
                src={sale}
                alt="sale"
                className="absolute w-[6rem] bottom-0 right-0"
              />
            ) : (
              <Image
                src={active}
                alt="sale"
                className="absolute w-[6rem] bottom-0 right-0"
              />
            )}{" "}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#333333] font-semibold mr-2">{desc}</span>
            <span className="text-gray-700 mr-2 space-x-3">
              <span className="text-[#828282]"> starting price</span>
              <span className="text-[#333333] font-extrabold">{price}</span>
            </span>
            <div className="text-[#828282] flex items-center gap-5">
              {" "}
              <span>Lot starts in </span>
              <div className="flex  gap-5">{remaininghours} </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          {!readIcon ? (
            <FaRegHeart size={20} />
          ) : (
            <Image src={redheart} alt="redheart" width={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
