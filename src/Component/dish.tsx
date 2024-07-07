import { MainDish } from "@/Data/data";
import Image from "next/image";
import React from "react";
const Dish = () => {
  return (
    <section className="p-8 bg-black z-0 relative ">
      <Image src="/shape-2.png" width={400} height={400} alt="photo" className=" absolute top-0 right-0" />
      <Image src="/shape-5.png" width={400} height={400} alt="photo" className=" absolute bottom-0 left-0" />
      <div className="flex p-4 flex-col gap-8 my-[60px] mx-auto max-w-[555px]  h-[70%] justify-center items-center text-center">
        <h5 className="text-gold text-[16px] leading-[24px] text-center uppercase z-10">
          FLAVORS FOR ROYALTY
        </h5>
        <Image src="/separator.svg" className="" width={180} height={150} alt="" />
        <h1 className="text-[40px] leading-[48px] text-center text-white z-10 ">
          We Offer Top Notch
        </h1>
        <p className="text-white text-[16px] leading-[24px] text-center    z-10 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          similique recusandae quis! Nemo quo aut voluptatum iusto fuga illo eum
          quos perferendis placeat? Optio reiciendis molestias officia facilis
          provident quidem.
        </p>
        

      </div>

      <div className=" relative flex flex-wrap justify-center gap-[45px]  ">
        {MainDish.map((item) => {
          return (
            <div
              key={item.title}
              className={`${
                item.id === 0
                  ? "lg:relative lg:top-[-139px] lg:right-[100px]"
                  : ""
              }${
                item.id === 2
                  ? " lg:relative lg:top-[-139px] lg:left-[100px]"
                  : ""
              } p-3 `}
            >
              <div className="group relative z-20">
                
                <Image
                  className=" group-hover:animate-pulse absolute z-10 right-[80px] -top-[18px]"
                  src={item.pattern}
                  width={140}
                  height={75}
                  alt="pattern"
                />
                <Image
                  src={item.Img}
                  width={300}
                  className="relative rounded-sm z-20  "
                  height={300}
                  alt="img"
                />
              </div>
              <h3 className="text-white relative   text-[28px] leading-[33px] text-center m-2 p-9">
                {item.title}
              </h3>
              <div className="flex items-center  justify-center relative  ">
                <p className="text-gold relative text-[14px] justify-center cursor-pointer hover:border-b-4 w-auto transition-all duration-150 border-double  ">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dish;
