
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import TopCenters from "./components/TopCenters";
import GaragePreview from "./components/GaragePreview";
import BottomCTA from "./components/BottomCTA";


export default function Home() {
  const navigate = useNavigate();
  const { hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, key]);

  const handleOpenApp = () => {
    navigate("/Owner");
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
