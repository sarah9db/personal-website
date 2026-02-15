import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          © 2025 Sarah Rosaria Dias Barreto
        </p>
        <div className="flex items-center gap-6">
          <a href="tel:339-236-9764" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone size={18} />
          </a>
          <a href="mailto:sarah9db@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/sarah-dias-barreto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/sarah9db" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
