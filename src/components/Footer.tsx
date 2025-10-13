import { Linkedin, Mail, Globe } from "lucide-react";
import aerLogo from "@/assets/aer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <img src={aerLogo} alt="AER Logo" className="h-12 brightness-0 invert" />
              <p className="text-primary-foreground/80 leading-relaxed">
                Science-backed carbon tracking using blockchain for transparent, auditable climate reporting.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#assessment" className="hover:text-primary-foreground transition-colors">
                    Free Assessment
                  </a>
                </li>
                <li>
                  <a href="https://aercarbon.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    About AER
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <div className="bg-primary-foreground/10 p-2 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span>Connect on LinkedIn</span>
                </a>
                <a 
                  href="mailto:contact@aercarbon.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <div className="bg-primary-foreground/10 p-2 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>contact@aercarbon.com</span>
                </a>
                <a 
                  href="https://aercarbon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <div className="bg-primary-foreground/10 p-2 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                    <Globe className="h-5 w-5" />
                  </div>
                  <span>aercarbon.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} AER Carbon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
