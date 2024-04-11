"use client";
import { RiAddCircleLine } from "react-icons/ri";
import Button from "./UI/Button";
import Tabs from "./UI/Tabs";
import { Products } from "@/data";
import ProductsCard from "./Components/ProductsCard";
import { Reveal, Zoom, Bounce, Fade } from "react-awesome-reveal";
import ProfileCard from "./Components/ProfileCard";
import Navbar from "./Components/Navbar";

export default function Home() {
  const products = Products.map((item, idx) => (
    <ProductsCard key={idx} item={item} />
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
              <div className="bg-white shadow rounded-lg p-6 ">
                <div className="flex items-baseline justify-between">
                  <Tabs />

                  <Button
                    className="fixed right-[1rem] top-[26rem] lg:static z-10"
                    width="w-fit"
                  >
                    <div className="flex items-center gap-4 justify-center">
                      {" "}
                      <RiAddCircleLine />
                      <span>Add Review</span>
                    </div>
                  </Button>
                </div>

                <div className="font-extrabold text-[#333333]">
                  <span className="text-[1.5rem] mr-2">Products</span>
                  <span className=" font-medium test-sm test-[#828282]">
                    (12)
                  </span>
                </div>
                <Fade cascade delay={10}>
                  {products}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
