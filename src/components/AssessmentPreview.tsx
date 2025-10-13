import { Button } from "@/components/ui/button";
import { ClipboardCheck, BarChart3, Rocket, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AssessmentPreview = () => {
  const navigate = useNavigate();
  const benefits = [
    {
      icon: ClipboardCheck,
      title: "15 Quick Questions",
      description: "Simple yes/no and multiple-choice format designed for busy leaders",
    },
    {
      icon: BarChart3,
      title: "Instant Score & Insights",
      description: "Get your Carbon Performance Score with actionable recommendations",
    },
    {
      icon: Rocket,
      title: "Personalized Action Plan",
      description: "Tailored next steps to improve compliance and unlock funding",
    },
  ];

  return (
    <section id="assessment" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Take the Free <span className="text-primary">Carbon Score Assessment</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover where you stand and what steps will get you audit-ready for EU financing and green loans.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl p-8 text-center shadow-soft hover:shadow-strong transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-light rounded-full p-4 w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-strong text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to unlock your carbon credentials?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              No registration required. Immediate feedback. Actionable insights to qualify for EU financing and green loans.
            </p>
            
            <Button 
              variant="cta" 
              size="xl" 
              className="group"
              onClick={() => navigate("/assessment")}
            >
              Start The Assessment Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>3 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>No Email Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentPreview;
