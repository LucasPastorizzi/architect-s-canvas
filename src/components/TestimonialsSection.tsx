import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "Douglas entendeu exatamente o que queríamos: uma casa que fosse nossa cara, sem excessos, mas com aquele toque de sofisticação que só ele consegue.",
    author: "Marina Albuquerque",
    role: "Casa Monteiro, Novo Hamburgo",
  },
  {
    text: "Morar numa casa projetada pelo Douglas é diferente. Cada cômodo tem uma intenção, cada detalhe conta. Foi a melhor decisão que tomamos.",
    author: "Ricardo & Ana Mendes",
    role: "Villa Serena, Porto Alegre",
  },
  {
    text: "Ele não projeta casas, ele projeta experiências. A forma como a luz entra, o silêncio dos materiais — tudo é pensado com uma sensibilidade rara.",
    author: "Fernanda Costa",
    role: "Residência Alto da Serra, Gramado",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useScrollReveal(0.15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-32 lg:py-44 bg-secondary">
      <div ref={ref} className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Depoimentos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-20">
            O que dizem nossos <em className="italic">clientes</em>
          </h2>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic mb-10">
                "{testimonials[current].text}"
              </p>
              <p className="font-body text-sm tracking-[0.15em] uppercase text-foreground">
                {testimonials[current].author}
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-8 h-px transition-all duration-500 ${
                i === current ? "bg-foreground w-12" : "bg-foreground/30"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
