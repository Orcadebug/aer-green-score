import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, TrendingUp, Calendar, Phone, Mail, Linkedin } from "lucide-react";
import { useEffect } from "react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, formData } = location.state || { score: 0, formData: {} };

  useEffect(() => {
    if (!location.state) {
      navigate("/assessment");
    }
  }, [location.state, navigate]);

  const getScoreLevel = () => {
    if (score >= 70) return "high";
    if (score >= 40) return "moderate";
    return "low";
  };

  const scoreLevel = getScoreLevel();

  const getRecommendations = () => {
    if (scoreLevel === "high") {
      return {
        title: "Excellent Carbon Management Maturity!",
        description: "You're well-positioned for EU audits and green financing opportunities.",
        icon: <CheckCircle2 className="h-16 w-16 text-green-600" />,
        strengths: [
          "Strong foundation in carbon tracking and reporting",
          "Good compliance readiness for EU/SEC regulations",
          "Active engagement with sustainability initiatives"
        ],
        opportunities: [
          "Enhance supply chain transparency with blockchain verification",
          "Automate reporting workflows for efficiency gains",
          "Leverage credentials for premium green financing"
        ],
        nextSteps: [
          "Book a free consultation to explore fast-track onboarding",
          "Join our verified carbon supplier network",
          "Access advanced reporting features"
        ]
      };
    } else if (scoreLevel === "moderate") {
      return {
        title: "Good Start, Room to Grow",
        description: "You have foundational practices in place but opportunities to strengthen your position.",
        icon: <TrendingUp className="h-16 w-16 text-yellow-600" />,
        strengths: [
          "Basic carbon tracking infrastructure",
          "Awareness of compliance requirements",
          "Interest in sustainability improvement"
        ],
        opportunities: [
          "Implement comprehensive Scope 3 tracking",
          "Establish independent verification processes",
          "Digitize and automate carbon documentation",
          "Develop supplier engagement programs"
        ],
        nextSteps: [
          "Download your personalized improvement roadmap",
          "Join our group onboarding session",
          "Access free carbon management resources"
        ]
      };
    } else {
      return {
        title: "Let's Build Your Foundation",
        description: "Starting your carbon management journey? We'll help you establish the right practices.",
        icon: <AlertCircle className="h-16 w-16 text-orange-600" />,
        strengths: [
          "Recognition of carbon management importance",
          "Opportunity for significant improvement",
          "Early-mover advantage in your sector"
        ],
        opportunities: [
          "Establish baseline carbon footprint measurement",
          "Implement basic Scope 1 & 2 tracking",
          "Learn regulatory requirements and timelines",
          "Build internal sustainability awareness",
          "Create audit-ready documentation systems"
        ],
        nextSteps: [
          "Watch our Carbon Management 101 demo video",
          "Download free starter guides and templates",
          "Schedule an education session with our team",
          "Access our compliance timeline planner"
        ]
      };
    }
  };

  const recommendations = getRecommendations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <img src="/src/assets/aer-logo.png" alt="AER" className="h-12 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Your Carbon Performance Score</h1>
          </div>

          {/* Score Display */}
          <Card className="p-8 mb-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30">
            <div className="flex justify-center mb-6">
              {recommendations.icon}
            </div>
            <div className="text-7xl font-bold text-primary mb-4">{score}%</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">{recommendations.title}</h2>
            <p className="text-muted-foreground text-lg">{recommendations.description}</p>
          </Card>

          {/* Detailed Results */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Strengths */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Key Strengths
              </h3>
              <ul className="space-y-2">
                {recommendations.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Opportunities */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Top Opportunities
              </h3>
              <ul className="space-y-2">
                {recommendations.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="p-8 mb-8 bg-primary/5 border-2 border-primary/30">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Recommended Next Steps
            </h3>
            <div className="space-y-4 mb-6">
              {recommendations.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Start Your 30-Day Free Trial
              </Button>
              <Button variant="hero" size="lg" onClick={() => navigate("/")}>
                Return to Home
              </Button>
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              Ready to transform your carbon management? Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="mailto:contact@aercarbon.com">
                  <Mail className="h-4 w-4" />
                  contact@aercarbon.com
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Schedule Call
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;
