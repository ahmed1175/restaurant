import Image from "next/image";
import React from "react";
import Button from "./button";

const SpecailDish = () => {
  return (
    <section>
      <div className="flex lg:h-[100vh]  flex-col lg:flex-row relative  ">
        <div className=" flex-1 bg-bg-img-4 bg-cover bg-no-repeat">
          <Image src="/special-dish-banner.jpg" height={500} width={500} alt="img" className="lg:hidden  w-full" />
        </div>
        <div className="flex-1 relative justify-start gap-5 py-12 flex-col items-center flex bg-black">
          <Image width={28} height={29} alt="icone" src="/badge-1.png" />
          <h1 className="text-gold text-[19px]">SPECIAL DISH</h1>
          <Image
            src="/separator.svg"
            alt="seperator"
            width={100}
            height={100}
          />
          <h1 className="bigText">Lobster Tortellini</h1>
          <p className="smallText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur rem consequuntur minima sed deleniti? Recusandae
            laborum, deserunt et error obcaecati ea ducimus. Culpa autem
            pariatur officia ipsum quas voluptatem molestiae?
          </p>
          <div className="flex gap-4 justify-center items-center">
            <h3 className="text-gray">40.00 $</h3>
            <h1 className=" text-gold text-[24px]">20.00 $</h1>
          </div>
          <Button title="VIEW OUR MENU" button="GoldButton" />
        </div>
      </div>
    </section>
  );
};

export default SpecailDish;
