import { Quote } from "lucide-react";

const Credibility = () => {
  const testimonial = {
    quote: "AER saved us 80% of our data-gathering time",
    author: "Johann Müller",
    company: "SteelCo",
  };

  const trustBadges = [
    "Eurofer",
    "EuLA",
    "ISO 14064",
    "GDPR Compliant",
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by <span className="text-primary">CBAM-Obligated SMEs</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from businesses like yours who've simplified their carbon compliance journey.
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-strong mb-12 animate-slide-up">
            <Quote className="h-12 w-12 text-primary mb-4" />
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-semibold">{testimonial.author}</span>
              <span>•</span>
              <span>{testimonial.company}</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 animate-slide-up">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              Compliant with Industry Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge}
                  className="bg-card rounded-lg p-6 text-center shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="font-semibold text-foreground">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
