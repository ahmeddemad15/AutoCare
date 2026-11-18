
import { useNavigate } from "react-router-dom";

import Hero from "../pages/Home/components/Hero";
import Stats from "../pages/Home/components/Stats";
import HowItWorks from "../pages/Home/components/HowItWorks";
import Services from "../pages/Home/components/Services";
import TopCenters from "../pages/Home/components/TopCenters";
import GaragePreview from "../pages/Home/components/GaragePreview";
import BottomCTA from "../pages/Home/components/BottomCTA";


export default function Home() {
  const navigate = useNavigate();

  const handleOpenApp = () => {
    navigate("/garage");
  };

  const handleBrowseCenters = () => {
    document.getElementById("centers-sec")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <Hero
        onOpenApp={handleOpenApp}
        onBrowseCenters={handleBrowseCenters}
      />

      <Stats />

      <HowItWorks />

      <Services />

      <TopCenters />

      <GaragePreview onOpenApp={handleOpenApp} />

      <BottomCTA onOpenApp={handleOpenApp} />
    </main>
  );
}
