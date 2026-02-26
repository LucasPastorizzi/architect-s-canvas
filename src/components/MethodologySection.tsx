import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Compass, PenTool, Ruler, CheckCircle } from "lucide-react";

const steps = [
  { icon: Compass, title: "Descoberta", desc: "Entendemos suas necessidades, desejos e o contexto do projeto." },
  { icon: PenTool, title: "Conceito", desc: "Desenvolvemos o conceito arquitetônico com estudos volumétricos." },
  { icon: Ruler, title: "Projeto", desc: "Detalhamento técnico completo para execução impecável." },
  { icon: CheckCircle, title: "Entrega", desc: "Acompanhamento de obra até a entrega final do projeto." },
];

const MethodologySection = () => {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section id="processo" className="py-32 lg:py-44 bg-background">
      <div ref={ref} className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Metodologia
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Nosso <em className="italic">processo</em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="text-center relative"
                >
                  <div className="w-24 h-24 mx-auto bg-background border border-foreground/10 flex items-center justify-center mb-8 relative z-10">
                    <Icon size={28} strokeWidth={1} className="text-foreground" />
                  </div>
                  <span className="font-body text-xs tracking-[0.2em] text-muted-foreground mb-2 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-light text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
