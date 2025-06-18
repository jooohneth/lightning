import Hero from "@/components/hero";
import Info from "@/components/info";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div
      className="font-mono h-screen overflow-y-scroll snap-y snap-mandatory text-[#ffffe4] "
      style={{
        backgroundImage: "url('/bg/bg-main-c.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="snap-start h-screen w-full relative flex items-center justify-center">
        <Hero />
      </div>
      <div className="snap-start h-screen w-full flex justify-center items-center py-30">
        <Info />
      </div>
      <div className="snap-start h-screen w-full flex justify-center py-20">
        <CTA />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
