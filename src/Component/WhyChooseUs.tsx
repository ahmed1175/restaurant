import { WhyChooseUs1 } from "@/Data/data";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section>
      <div className=" bg-[#161718]  flex flex-col gap-3  items-center p-7   ">
        <h1 className=" uppercase text-gold text-[20px]  leading-[48px] text-center ">
          WHY CHOOSE US
        </h1>
        <Image src="/separator.svg" height={100} width={100} alt="seperator" />
        <h1 className="bigText">Our Strength</h1>
        <div className=" relative grid grid-cols-1 w-[90%] md:grid-cols-2 gap-3 pb-24 mx-4 p-6 ">
          <Image
            className=" absolute -top-7 -right-3 z-0"
            src="/shape-7.png"
            width={130}
            height={130}
            alt=""
          />
        <Image
            className=" absolute -bottom-7 -left-20 z-0"
            src="/shape-8.png"
            width={120}
            height={120}
            alt=""
          />
          {WhyChooseUs1.map((item) => {
            return (
              <div
                key={item.title}
                className="flex hover:scale-105 duration-200  cursor-pointer flex-col z-10 gap-2 p-3 py-7 bg-black text-center items-center "
              >
                <Image src={item.icon} height={70} width={80} alt="icon" />
                <h1 className="text-white text-[24px] leading-[28.8px] text-center ">
                  {item.title}
                </h1>
                <p className=" text-[16px] leading-[24px] text-center m-2 w-[90%] text-[#a6a6a6] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis excepturi obcaecati rem
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
