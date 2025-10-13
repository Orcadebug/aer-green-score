import { Shield, Award, Users, TrendingUp } from "lucide-react";

const Credibility = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Verified",
      description: "Transparent, auditable carbon tracking using cutting-edge blockchain technology",
    },
    {
      icon: Award,
      title: "EU CBAM Standards",
      description: "Built to comply with EU Carbon Border Adjustment Mechanism requirements",
    },
    {
      icon: Users,
      title: "Climate Expert-Led",
      description: "Founded by Sai Pittala, backed by climate science and industry expertise",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Trusted by climate-conscious businesses to unlock green financing opportunities",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">AER</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AER is a science-backed climate technology platform using blockchain to deliver transparent, 
              auditable carbon tracking. Trusted by climate-conscious businesses, built using EU CBAM standards, 
              and recognized for innovation at the forefront of verifiable, automated carbon accounting.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-light rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Founder highlight */}
          <div className="mt-16 bg-gradient-accent rounded-2xl p-8 md:p-12 text-center shadow-strong">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Founded by climate tech innovator Sai Pittala
              </h3>
              <p className="text-lg text-primary-foreground/90">
                Pioneering the future of carbon accounting with verifiable, blockchain-powered transparency 
                that empowers businesses to meet regulatory requirements and unlock green financing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
