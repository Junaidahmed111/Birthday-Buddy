import CTA from "@/components/CTA";
import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Wishes from "@/components/Wishes";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <Wishes />
      <CTA />
    </main>
  );
}
