import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import Features from "@/components/Features";
import Objections from "@/components/Objections";
import AssessmentPreview from "@/components/AssessmentPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Credibility />
      <Features />
      <Objections />
      <AssessmentPreview />
      <Footer />
    </main>
  );
};

export default Index;
