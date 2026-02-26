import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-16 bg-background border-t border-border">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div>
          <p className="font-heading text-xl tracking-[0.3em] uppercase text-foreground mb-4">
            Arqstudio
          </p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            Arquitetura de excelência<br />São Paulo, Brasil
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-2">Links</p>
          {["Home", "Sobre", "Projetos", "Processo", "Contato"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Contato</p>
          <p className="font-body text-xs text-muted-foreground mb-4">contato@arqstudio.com</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Arqstudio. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
