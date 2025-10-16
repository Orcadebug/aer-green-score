import { HelpCircle } from "lucide-react";

const Objections = () => {
  const objections = [
    {
      concern: "I'm not a carbon expert.",
      answer: "Guided onboarding tour and in-app tooltips get you live in under 30 minutes.",
    },
    {
      concern: "What about data security?",
      answer: "All data is encrypted at rest and on-chain proofs ensure immutability.",
    },
    {
      concern: "Is it affordable?",
      answer: "Pilots start free for 30 days; then just €600/month for unlimited reports.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Common <span className="text-primary">Questions</span> Answered
            </h2>
          </div>

          {/* Objections List */}
          <div className="space-y-6">
            {objections.map((item, index) => (
              <div
                key={item.concern}
                className="bg-card rounded-xl p-6 md:p-8 shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-light rounded-full p-3">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                      "{item.concern}"
                    </h3>
                    <p className="text-muted-foreground text-lg">{item.answer}</p>
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

export default Objections;
