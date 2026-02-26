import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DifferentialSection = () => {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="py-32 lg:py-52 bg-primary">
      <div ref={ref} className="container mx-auto px-6 lg:px-8 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-8"
        >
          Nossa Filosofia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[1.1]"
        >
          Acreditamos que a arquitetura não é apenas sobre construir espaços — é sobre criar{" "}
          <em className="italic">experiências que transformam vidas.</em>
        </motion.h2>
      </div>
    </section>
  );
};

export default DifferentialSection;
