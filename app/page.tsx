"use client";
import { RiAddCircleLine } from "react-icons/ri";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import ProfileCard from "./Components/ProfileCard";
import Tabs from "./Components/Tabs";
import { Products } from "@/data";
import ProductsCard from "./Components/ProductsCard";
import { Reveal, Zoom, Bounce } from "react-awesome-reveal";

export default function Home() {
  const products = Products.map((item) => (
    <ProductsCard key={item.price} item={item} />
  ));
  return (
    <>
      <Reveal>
        <Navbar />
      </Reveal>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <Zoom>
                <ProfileCard />
              </Zoom>
            </div>

            <div className="col-span-4 sm:col-span-9">
              <Zoom>
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex items-baseline justify-between ">
                    <Tabs />
                    <Button
                      className="fixed right-0 top-[26rem] lg:static"
                      width="w-fit"
                    >
                      <div className="flex items-center gap-4 justify-center">
                        {" "}
                        <RiAddCircleLine />
                        <span>Add Review</span>
                      </div>
                    </Button>{" "}
                  </div>
                  <div className="font-extrabold text-[#333333]  ">
                    <span className="text-[1.5rem] mr-2">Products</span>
                    <span className=" font-medium test-sm test-[#828282]">
                      (12)
                    </span>
                  </div>
                  <Bounce cascade>{products}</Bounce>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
