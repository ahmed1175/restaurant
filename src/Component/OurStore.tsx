import Image from "next/image";
import React from "react";
import Button from "./button";

const OurStore = () => {
  return (
    <section className=" flex flex-col md:flex-row p-8   bg-[#161718] ">
      <div className="flex-1 gap-7 text-center relative flex-col flex items-center justify-center m-6 p-8  ">
        <h3 className="text-gold text-[19px]  ">OUR STORY</h3>
        <Image
          src="/separator.svg"
          width={150}
          height={150}
          className=""
          alt="separator"
        />
        <h1 className="bigText">
          Every Flavor Tells a Story
        </h1>
        <p className="smallText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quasi
          ad temporibus nemo aliquid! Quo aperiam nesciunt voluptatum sint
          reiciendis, error quaerat quam. Laudantium ea eum sapiente aliquam nam
          beatae?
        </p>
        <h2 className="text-[30px] leading-[48px] text-center text-white">
          Book Through Call
        </h2>
        <h2 className="text-[20px]  text-center text-gold">01096975997</h2>

        <Button title="Read more" button="GoldButton" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className=" relative p-5 ">
          <Image
            src="/badge-2-bg.png"
            width={128}
            height={120}
            className=" absolute animate-spin  z-30 -top-7 -right-1 border-1 border-gold"
            alt="img"
          />
          <Image
            src="/badge-2.png"
            width={125}
            height={120}
            className=" absolute  z-30 -top-7 -right-1 border-1 border-gold"
            alt="img"
          />
          <Image
            src="/img-pattern.svg"
            height={250}
            width={240}
            className="hidden lg:block   absolute z-0 -left-10 h-[57%]  bottom-0 "
            alt="img"
          />
          <Image
            src="/about-abs-image.jpg"
            height={150}
            width={250}
            className=" hidden lg:block absolute z-20 -left-10  bottom-5  "
            alt="img"
          />
          <Image
            src="/about-banner.jpg"
            width={500}
            height={100}
            className="z-0 "
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStore;
