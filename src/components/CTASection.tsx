import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section id="contato" className="py-32 lg:py-44 bg-foreground">
      <div ref={ref} className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-background/40 mb-6"
        >
          Pronto para começar?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-background leading-[1.1] mb-8"
        >
          Vamos dar vida ao seu <em className="italic">próximo projeto</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-sm text-background/50 mb-12 leading-relaxed"
        >
          Entre em contato para uma consulta inicial gratuita. Estamos prontos para transformar sua visão em realidade.
        </motion.p>
        <motion.a
          href="mailto:contato@arqstudio.com"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-background/30 px-12 py-5 text-background hover:bg-background hover:text-foreground transition-all duration-500"
        >
          Solicitar Orçamento
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
