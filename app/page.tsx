import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Image from "next/image";
import RecentProject from "@/components/RecentProject";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-black relative flex justify-center 
                    items-center flex-col overflow-clip
                    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} /> {/* login button ko manually nikala */}
        <Hero />
        {/* <Grid /> */}
        {/* <TechStack /> */}
        <RecentProject />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
