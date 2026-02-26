import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import portraitImg from "@/assets/architect-portrait.jpg";

const stats = [
  { value: 120, label: "Projetos Realizados", suffix: "+" },
  { value: 15, label: "Anos de Experiência", suffix: "+" },
  { value: 8, label: "Prêmios Nacionais", suffix: "" },
  { value: 35, label: "Colaboradores", suffix: "+" },
];

const AnimatedNumber = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section id="sobre" className="py-32 lg:py-44 bg-background">
      <div ref={ref} className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={portraitImg}
                alt="Arquiteto"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-foreground/20 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Sobre o Arquiteto
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-8">
              Criando espaços que <em className="italic">inspiram</em>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                Com mais de 15 anos de experiência, nosso estúdio se dedica a criar 
                espaços que dialogam com a paisagem urbana e natural, respeitando a 
                identidade de cada cliente e a essência de cada lugar.
              </p>
              <p>
                Nossa abordagem combina rigor técnico com sensibilidade artística, 
                resultando em projetos que são simultaneamente funcionais e 
                esteticamente extraordinários.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                >
                  <span className="font-heading text-4xl lg:text-5xl font-light text-foreground">
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={isInView} />
                  </span>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
