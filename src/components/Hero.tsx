import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import aerLogo from "@/assets/aer-logo.png";

const Hero = () => {
  const scrollToAssessment = () => {
    document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-dark/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative container mx-auto px-6 py-20 md:py-32">
        {/* Logo */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <img src={aerLogo} alt="AER Logo" className="h-16 md:h-20" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hook */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-slide-up">
            Frustrated by confusing carbon compliance rules and{" "}
            <span className="text-primary">missed funding?</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Even though you're investing in sustainability, it feels impossible to unlock green revenue and recognition.
          </p>

          {/* Value proposition */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-strong animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to become a leader in transparent, audit-ready carbon reporting?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Answer 15 questions to discover your <span className="font-semibold text-primary">Carbon Performance Score</span> and get a tailored action plan to boost your business's credibility for investors, banks, and regulators.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Measure Accuracy</h3>
                  <p className="text-sm text-muted-foreground">Emissions reporting precision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Benchmark Supply Chain</h3>
                  <p className="text-sm text-muted-foreground">Transparency standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Diagnose Readiness</h3>
                  <p className="text-sm text-muted-foreground">EU CBAM, SEC & green loans</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToAssessment}
              className="group"
            >
              Start Free Assessment
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              FREE • 3 minutes • Instant results • No registration required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
