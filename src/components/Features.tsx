import { Zap, FileText, Shield, Users, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      feature: "Real-Time GHG API (POST /ghg/calculate)",
      benefit: "Instant carbon footprint insights without Excel",
    },
    {
      icon: FileText,
      feature: "Automated CBAM XML Export",
      benefit: "Zero-error compliance filings in 2 minutes",
    },
    {
      icon: Shield,
      feature: "Blockchain Audit Stamps",
      benefit: "Immutable proof for auditors and regulators",
    },
    {
      icon: Users,
      feature: "Multi-Tenant & Google OAuth",
      benefit: "Secure, siloed access for each business unit",
    },
    {
      icon: CheckCircle,
      feature: "Supplier Intake Portal with AI validation",
      benefit: "Clean, validated supply-chain data in one portal",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need for <span className="text-primary">CBAM Compliance</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for SMEs who need fast, accurate carbon reporting without the complexity.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={item.feature}
                className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-strong transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="bg-primary-light rounded-full p-4 w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {item.feature}
                    </h3>
                    <p className="text-muted-foreground">{item.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
