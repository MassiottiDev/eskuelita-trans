
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import TalleresActivos from "@/components/TalleresActivos";
import ProximosTalleres from "@/components/ProximosTalleres";
import AboutUs from "@/components/AboutUs";
import Initiatives from "@/components/Initiatives";
import RadioSection from "@/components/RadioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-400">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <TalleresActivos />
        <ProximosTalleres />
        <AboutUs />
        <Initiatives />
        <RadioSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
