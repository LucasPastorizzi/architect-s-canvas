import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Arquitetura moderna em preto e branco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-6"
        >
          Casas de Luxo &middot; Arquitetura &middot; Exclusividade
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[0.95] max-w-5xl"
        >
          Residências que
          <br />
          <em className="italic font-light">definem o luxo</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-sm md:text-base text-primary-foreground/60 mt-8 max-w-lg tracking-wide"
        >
          Projetos residenciais de alto padrão que transformam o conceito de morar em uma experiência extraordinária.
        </motion.p>
        <motion.a
          href="#projetos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 font-body text-xs tracking-[0.3em] uppercase border border-primary-foreground/40 px-10 py-4 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-500"
        >
          Ver Projetos
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
