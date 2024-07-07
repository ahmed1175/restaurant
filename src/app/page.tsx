import Hero from "@/Component/Hero";
import OurStore from "@/Component/OurStore";
import RecentUpdate from "@/Component/RecentUpdate";
import SpecailDish from "@/Component/SpecailDish";
import WhyChooseUs from "@/Component/WhyChooseUs";
import Dish from "@/Component/dish";
import Menu from "@/Component/menu";
import Qoute from "@/Component/qoute";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Dish />
      <OurStore />
      <SpecailDish />
      <Menu />
      <Qoute />
      <WhyChooseUs />
      <RecentUpdate />
    </section>
  );
}
