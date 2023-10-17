import CTA from "@/components/CTA";
import Cards from "@/components/Users";
import Hero from "@/components/Hero";
import Wishes from "@/components/Wishes";
import Image from "next/image";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <Feature />
      <Wishes />
      <CTA />
    </main>
  );
}
