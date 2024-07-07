import { footertext } from "@/Data/data";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-bg-img-9  bg-center bg-cover bg-no-repeat">
      <div className=" relative w-full z-0 gap-4  text-white justify-center text-center flex flex-wrap ">
        <div className="flex  my-4 justify-center gap-8 w-[55%] h-[90%] lg:w-[23%]">
          <ul>
            {footertext.map((item) => {
              return (
                <li key={item.right} className="m-9 text-[#a6a6a6] hover:text-gold cursor-pointer hover:scale-105">
                  {item.right}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" relative p-2  flex flex-col gap-2 lg:w-[45%] w-[90%]    items-center   bg-bg-img-10 bg-[#161718] z-10">
          <Image
            src="/footer-form-pattern.svg"
            width={7.7}
            height={7.3}
            alt=""
            className=" absolute left-0 top-0 hidden md:block"
          />
          <Image
            src="/footer-form-pattern.svg"
            width={7.7}
            height={8}
            alt=""
            className=" absolute right-0 bottom-0 hidden md:block"
          />
          <Image
            src="/logo.svg"
            width={120}
            height={120}
            alt=""
            className="py-3"
          />
          <p className="w-[90%] text-[#a6a6a6]  text-[16px] leading-[24px] text-center m-2">
            Restaurant St, Delicious City, London 9578, UK
          </p>
          <p className="w-[90%] text-[#a6a6a6]  text-[16px] leading-[24px] text-center m-2">
            booking@restaurant.com
          </p>
          <p className="w-[90%] text-[#a6a6a6]  text-[16px] leading-[24px] text-center m-2">
            0109695997
          </p>
          <p className="w-[90%] text-[#a6a6a6]  text-[16px] leading-[24px] text-center m-2">
            Open : 09:00 am - 01:00 pm
          </p>
          <div className="flex gap-3 ">
            <h1 className="border-[1px] border-solid border-gold w-2 h-2 animate-spin"></h1>
            <h1 className="border-[1px] border-solid border-gold w-2 h-2 animate-spin"></h1>
            <h1 className="border-[1px] border-solid border-gold w-2 h-2 animate-spin"></h1>
          </div>
          <h1 className="text-[30px]  leading-[48px] text-center text-white z-10">
            Get News & Offers
          </h1>
          <div className="flex gap-1 justify-center text-center items-center">
            <p className="text-[#a6a6a6] text-[14px] ">Subscribe us & Get</p>
            <span className="text-[15px] leading-[24px]">25% Off.</span>
          </div>
        </div>
        <div className="flex my-4 h-[90%] lg:w-[23%] w-[50%]  justify-center">
          <ul className="gap-3 ">
            {footertext.map((item) => {
              return (
                <li key={item.left} className="m-9 text-[#a6a6a6] hover:text-gold cursor-pointer hover:scale-105">
                  {item.left}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center text-center text-[#a6a6a6] m-3 p-3">
        © 2024 ahmed ayman. All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
