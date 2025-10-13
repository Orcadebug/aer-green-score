import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    company: "",
    phone: "",
    
    // Best Practices (Yes/No/Partial)
    trackingFootprint: "",
    independentVerification: "",
    reductionTarget: "",
    digitizingReports: "",
    compliance: "",
    supplierReporting: "",
    auditableDocumentation: "",
    teamTraining: "",
    greenFunding: "",
    quarterlyReviews: "",
    
    // Advanced Qualification
    role: "",
    mainGoal: "",
    biggestChallenge: "",
    supportType: "",
    additionalInfo: ""
  });

  const totalSteps = 4;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate score based on responses
    const bestPractices = [
      formData.trackingFootprint,
      formData.independentVerification,
      formData.reductionTarget,
      formData.digitizingReports,
      formData.compliance,
      formData.supplierReporting,
      formData.auditableDocumentation,
      formData.teamTraining,
      formData.greenFunding,
      formData.quarterlyReviews
    ];
    
    const yesCount = bestPractices.filter(answer => answer === "yes").length;
    const partialCount = bestPractices.filter(answer => answer === "partial").length;
    const score = Math.round((yesCount * 10) + (partialCount * 5));

    // Navigate to results with data
    navigate("/results", { state: { score, formData } });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-3">Let's Get Started</h2>
              <p className="text-muted-foreground">First, tell us a bit about yourself and your company</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  placeholder="Acme Inc."
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-3">Carbon Management Best Practices</h2>
              <p className="text-muted-foreground">Answer these questions to assess your current carbon management maturity</p>
            </div>

            <div className="space-y-6">
              {[
                { id: "trackingFootprint", question: "Are you tracking your company's full carbon footprint (Scope 1/2/3)?" },
                { id: "independentVerification", question: "Have you had emissions independently verified?" },
                { id: "reductionTarget", question: "Do you have an emissions reduction target for 2025?" },
                { id: "digitizingReports", question: "Are you digitizing carbon reports?" },
                { id: "compliance", question: "Are you meeting EU/SEC compliance on climate disclosures?" }
              ].map(({ id, question }) => (
                <div key={id} className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <Label className="text-base font-medium mb-3 block">{question}</Label>
                  <RadioGroup
                    value={formData[id as keyof typeof formData]}
                    onValueChange={(value) => updateField(id, value)}
                  >
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id={`${id}-yes`} />
                        <Label htmlFor={`${id}-yes`}>Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partial" id={`${id}-partial`} />
                        <Label htmlFor={`${id}-partial`}>Partial</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id={`${id}-no`} />
                        <Label htmlFor={`${id}-no`}>No</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-3">Supply Chain & Operations</h2>
              <p className="text-muted-foreground">Evaluate your operational carbon management capabilities</p>
            </div>

            <div className="space-y-6">
              {[
                { id: "supplierReporting", question: "Do you work with suppliers who report their emissions?" },
                { id: "auditableDocumentation", question: "Can you create auditable documentation for ESG reporting?" },
                { id: "teamTraining", question: "Is your team trained on carbon and ESG best practice?" },
                { id: "greenFunding", question: "Do you actively pursue green funding or loans?" },
                { id: "quarterlyReviews", question: "Are carbon results part of your quarterly reviews?" }
              ].map(({ id, question }) => (
                <div key={id} className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <Label className="text-base font-medium mb-3 block">{question}</Label>
                  <RadioGroup
                    value={formData[id as keyof typeof formData]}
                    onValueChange={(value) => updateField(id, value)}
                  >
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id={`${id}-yes`} />
                        <Label htmlFor={`${id}-yes`}>Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partial" id={`${id}-partial`} />
                        <Label htmlFor={`${id}-partial`}>Partial</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id={`${id}-no`} />
                        <Label htmlFor={`${id}-no`}>No</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-3">Your Goals & Challenges</h2>
              <p className="text-muted-foreground">Help us understand how we can best support you</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="role">What is your role? *</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => updateField("role", value)}
                >
                  <div className="space-y-2">
                    {["Founder", "CFO", "Operations", "Sustainability Lead", "Consultant"].map((role) => (
                      <div key={role} className="flex items-center space-x-2">
                        <RadioGroupItem value={role} id={`role-${role}`} />
                        <Label htmlFor={`role-${role}`}>{role}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="mainGoal">Main goal in next 90 days? *</Label>
                <RadioGroup
                  value={formData.mainGoal}
                  onValueChange={(value) => updateField("mainGoal", value)}
                >
                  <div className="space-y-2">
                    {[
                      "Pass EU audit",
                      "Secure green financing",
                      "Cut emissions",
                      "Improve supplier data"
                    ].map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <RadioGroupItem value={goal} id={`goal-${goal}`} />
                        <Label htmlFor={`goal-${goal}`}>{goal}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="biggestChallenge">Biggest challenge? *</Label>
                <RadioGroup
                  value={formData.biggestChallenge}
                  onValueChange={(value) => updateField("biggestChallenge", value)}
                >
                  <div className="space-y-2">
                    {["Data", "Cost", "Supplier engagement", "Regulatory uncertainty"].map((challenge) => (
                      <div key={challenge} className="flex items-center space-x-2">
                        <RadioGroupItem value={challenge} id={`challenge-${challenge}`} />
                        <Label htmlFor={`challenge-${challenge}`}>{challenge}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="supportType">Preferred support type? *</Label>
                <RadioGroup
                  value={formData.supportType}
                  onValueChange={(value) => updateField("supportType", value)}
                >
                  <div className="space-y-2">
                    {[
                      "Self-serve software",
                      "Expert consult",
                      "Full-service",
                      "Free resources"
                    ].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={`support-${type}`} />
                        <Label htmlFor={`support-${type}`}>{type}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="additionalInfo">Anything else we should know about your climate journey?</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => updateField("additionalInfo", e.target.value)}
                  placeholder="Tell us more..."
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <img src="/src/assets/aer-logo.png" alt="AER" className="h-12 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Carbon Performance Assessment</h1>
            <p className="text-muted-foreground">Step {currentStep + 1} of {totalSteps}</p>
          </div>

          {/* Progress Bar */}
          <Progress value={progress} className="mb-8" />

          {/* Form Content */}
          <div className="bg-card rounded-lg shadow-lg p-8 mb-6">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              variant="cta"
              onClick={handleNext}
              className="gap-2"
            >
              {currentStep === totalSteps - 1 ? "Get My Score" : "Continue"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
