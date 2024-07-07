import { menu } from "@/Data/data";
import Image from "next/image";
import React from "react";
import Button from "./button";

const Menu = () => {
  return (
    <section>
      <div className=" bg-[#161718] relative  ">
        <Image
          src="/shape-5.png"
          width={500}
          height={500}
          className=" absolute top-0 text-white"
          alt="logo"
        />
        <Image
          src="/shape-6.png"
          width={500}
          height={500}
          className=" absolute right-0 bottom-0 text-white"
          alt="logo"
        />
        <div className=" justify-center flex flex-col items-center p-10 gap-5 z-20">
          <h1 className="text-gold text-[16px] leading-[24px] z-20 ">
            SPECIAL SELECTION
          </h1>
          <Image
            src="/separator.svg"
            width={100}
            height={100}
            alt="seperator"
            className="z-20"
          />
          <h1 className="bigText">Delicious Menu</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-1 justify-center m-auto   ">
          {menu.map((item) => {
            return (
              <div
                key={item.price}
                className="flex py-5 justify-center  gap-3 z-10"
              >
                <Image
                  src={item.img}
                  alt="menu"
                  width={80}
                  height={80}
                  className="float-left m-1"
                />

                <div className="flex flex-col w-[70%]">
                  <div className=" flex h-fit  w-[100%] m-1 gap-1  items-center  ">
                    <div className="flex items-center w-[50%]   ">
                      <h1 className="text-[19px]  font-semibold leading-[24px] w-[100%]  text-white gap-2 ">
                        {item.title}
                      </h1>
                    </div>
                    <span
                      className={` bg-gold text-black mx-1 uppercase p-1 ${
                        item.addition === "" ? "hidden" : ""
                      }  `}
                    >
                      {item.addition}
                    </span>
                    <div className=" hidden md:flex border-y-[1px] w-[50%] border-double   border-gold  h-[0.5rem] justify-center items-center text-center"></div>
                    <h2 className="text-gold  text-[24px] leading-[24px]  ">
                      {item.price}
                    </h2>
                  </div>
                  <div>
                    <p className="text-[#a6a6a6] text-[16px] leading-[24px] text-start  ">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="justify-center flex flex-col text-center items-center p-10 gap-5 z-20">
          <div className="flex justify-center gap-1 m-2 items-center z-20 ">
            <h1 className="text-white">During winter daily from</h1>
            <span className="text-gold">7:00 pm</span>
            <h1 className="text-white">to</h1>
            <span className="text-gold">9:00 pm</span>
          </div>
          <Button title="VIEW OUR MENUS" button="GoldButton" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
