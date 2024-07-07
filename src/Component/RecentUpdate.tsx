import Image from "next/image";
import React from "react";
import Button from "./button";
import { RecentUpdata1 } from "@/Data/data";

const RecentUpdate = () => {
  return (
    <section>
      <div className=" bg-black  flex flex-col gap-3 justify-center text-center  items-center p-8   ">
        <h1 className=" uppercase text-gold text-[18px]  leading-[48px] text-center ">
          RECENT UPDATES
        </h1>
        <Image src="/separator.svg" height={100} width={100} alt="seperator" />
        <h1 className="bigText">Upcoming Event</h1>
        <div className=" relative grid grid-cols-1 text-center   w-[80%]  items-center justify-center  sm:grid-cols-2  lg:grid-cols-3  gap-3 m-3  p-3 ">
          {RecentUpdata1.map((items) => {
            return (
              <div
                key={items.title}
                className={`${
                  items.title === "HEALTHY FOOD" && "bg-bg-img-6"
                } ${items.title === "FOOD, FLAVOUR" && "bg-bg-img-7"} ${
                  items.title === "RECIPIE" && "bg-bg-img-8"
                }  text-white h-[60vh] w-[100%] flex flex-col hover:scale-105 duration-300  justify-end items-center  m-3 bg-cover bg-no-repeat bg-center p-8 `}
              >
                <h1 className="uppercase text-gold text-[16px] font-semibold  leading-[48px] text-center">
                  {items.title}
                </h1>
                <p>{items.subtitle}</p>
              </div>
            );
          })}
        </div>
        <Button title="VIEW OUR BLOG" button="GoldButton" />
      </div>
    </section>
  );
};

export default RecentUpdate;
