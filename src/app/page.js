import Banner from "@/components/Banner";
import TopBrandsSection from "@/components/TopBrandsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
     <Banner />
     <TopBrandsSection />
    </div>
  );
}
