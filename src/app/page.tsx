import { Companies } from "@/sections/Companies";
import { Gamefeatures } from "@/sections/Gamefeatures";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <Companies />
    <Gamefeatures />
  </div>
  );
 
}
