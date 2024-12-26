import { Companies } from "@/sections/Companies";
import { Footer } from "@/sections/Footer";
import { Gamefeatures } from "@/sections/Gamefeatures";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Team } from "@/sections/Team";

export default function Home() {
  return (
    <div className="overflow-hidden ">
    <Header />    
    <Hero />
    <Companies />
    <Gamefeatures />
    <Team />
    <Footer />
    
  </div>
  );
 
}