import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aerLogo from "@/assets/aer-logo.png";

const Hero = () => {
  const navigate = useNavigate();

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
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-slide-up">
            Measure Your Scope 1–3 Emissions in Minutes and Generate{" "}
            <span className="text-primary">CBAM-Compliant Reports Instantly</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Real-time GHG calculations, automated XML exports, and immutable audit trails—no carbon-compliance expertise needed.
          </p>

          {/* Value proposition */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-strong animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Stop wrestling with spreadsheets and emission factors. With AER, you'll:
            </h2>

            {/* Benefits */}
            <div className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">
                  Get <span className="font-bold">instant</span> Scope 1–3 footprints using official EU 2024 factors
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">
                  Produce <span className="font-bold">CBAM-ready</span> XML reports in one click
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">
                  Securely <span className="font-bold">stamp</span> data on Polygon for audit proof
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate("/assessment")}
              className="group"
            >
              Start Your 30-Day Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Urgency */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-semibold text-foreground">
                Only 20 SME pilot slots available before CBAM enforcement on January 1, 2026. Reserve yours today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
