
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Mobile from "@/components/Mobile";
import Soft from "@/components/Soft";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="bg-black-50 px-[10px] lg:px-[20px] py-[10px] lg:py-[20px]">
      <Navbar />
      <Hero />
      <Mobile />
      <Soft />
      <Menu />  
      <Footer />
    </main>
  );
}
