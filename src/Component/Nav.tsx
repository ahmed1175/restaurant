import Image from "next/image";
import React from "react";
import Button from "./button";
import { NavLi } from "@/Data/data";

type UpperSectionProps = {
  name: string;
  timeWork: string;
  mynumber: string;
  email: string;
};
const UpperSection = ({
  name,
  timeWork,
  mynumber,
  email,
}: UpperSectionProps) => {
  return (
    <div className="  justify-center  text-white relative text-[16px] leading-[24px] text-start px-2 py-5 flex md:justify-between border-b-2 border-gold">
      <div className="gap-10 hidden md:flex  cursor-pointer ">
        <h4>{name}</h4>
        <h4>{timeWork}</h4>
      </div>
      <div className="flex justify-center items-center text-center gap-10 cursor-pointer">
        <h4>{mynumber}</h4>
        <h4>{email}</h4>
      </div>
    </div>
  );
};
const MainSection = () => {
  return (
    <div className="flex relative justify-between px-3 py-5 m-2 items-center ">
      <div>
        <Image src="/logo.svg" alt="logo" height={120} width={170} />
      </div>
      <div className="hidden md:flex gap-5">
        <div className="flex items-center  gap-5">
          {NavLi.map((item) => {
            return (
              <ul
                key={item}
                className="cursor-pointer hidden md:flex  text-white text-center duration-200 transition-all hover:border-b-4 hover:text-gold border-double border-gold"
              >
                <li className="">{item.title}</li>
              </ul>
            );
          })}
        </div>
        <div>
          <Button title="Find A Tablet" button="GoldButton" />
        </div>
      </div>
      <div className="flex md:hidden justify-start items-start text-white   ">
    <Image src="/bones.png" width={40} height={40} alt="" className="text-white "  />
      </div>
    </div>
  );
};
const Nav = () => {
  return (
    <section className="">
      <div className=" absolute w-full z-20">
        <UpperSection
          name="Restaurant St, Delicious City, London 9578, U"
          timeWork="Daily : 8.00 am to 10.00 pm"
          mynumber="01097975997"
          email="aahmedaymann.14@gmail.com"
        />
        <MainSection />
      </div>
    </section>
  );
};

export default Nav;
