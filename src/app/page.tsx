import Hero from "@/components/hero";
import Info from "@/components/info";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="font-mono min-h-screen md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory text-[#ffffe4] md:bg-center md:bg-cover md:bg-[url('/bg/bg-main.jpg')] bg-black">
      <div className="rounded-b-2xl md:rounded-none min-h-screen md:snap-start md:h-screen w-full relative z-10 flex items-center justify-center bg-[url('/bg/bg-mobile.jpg')] md:bg-none bg-cover bg-center">
        <Hero />
      </div>
      <div className="min-h-screen md:snap-start md:h-screen w-full relative z-10 flex justify-center items-center py-30">
        <Info />
      </div>
      <div className="min-h-screen md:snap-start md:h-screen w-full relative z-10 flex justify-center py-20">
        <CTA />
      </div>
      <div className="md:snap-start">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
