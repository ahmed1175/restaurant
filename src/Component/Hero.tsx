import React from "react";
import Button from "./button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className={` flex  justify-center flex-col  items-center relative bg-bg-img-2 bg-cover bg-no-repeat bg-center  bg-transparent  h-[120vh] `}
    >
      <div className=" flex flex-col gap-8 my-5 h-[70%] justify-center items-center text-center">
        <h2 className="text-gold text-[16px] leading-[24px] text-center uppercase ">
          TRADATIONAL & HYGINE
        </h2>
        <Image src="/separator.svg" width={180} height={150} alt="seprator" />
        <h1 className="text-[40px] leading-[48px] text-center text-white ">
          For the love of delicious food
        </h1>
        <h3
          className={`text-white text-[16px] leading-[24px] text-center w-[90%]`}
        >
          Come with family & feel the joy of mouthwatering food
        </h3>
        <Button title="view our menu" button="GoldButton" />
      </div>
      <div className="flex justify-end items-end  text-white w-full ">
        <Image
          src="/hero-icon.png"
          height={75}
          width={72}
          alt="hero icon "
          className="bg-gold p-3 m-3 mx-9 rounded-sm z-10 "
        />
        <div
          className=" absolute p-4 pt-5 flex justify-start animate-spin duration-300 z-0 m-3 mx-9 r-3 rounded-sm  border-2 border-gold   "
          width={400} 
        >
          sada
        </div>
      </div>
    </section>
  );
};

export default Hero;
