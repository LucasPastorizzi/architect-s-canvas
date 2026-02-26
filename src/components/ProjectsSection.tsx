import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

type Category = "Todos" | "Residencial" | "Comercial" | "Interiores";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  year: string;
  description: string;
  span: string;
}

const projects: Project[] = [
  { id: 1, title: "Casa Monteiro", category: "Residencial", image: project1, year: "2024", description: "Residência de luxo com 650m², piscina infinita e integração total com o jardim tropical. Projeto que redefine o conceito de morar bem.", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Villa Serena", category: "Residencial", image: project2, year: "2023", description: "Mansão contemporânea de 800m² com pé-direito duplo e acabamentos importados.", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Casa dos Espelhos", category: "Interiores", image: project3, year: "2024", description: "Interior de residência de alto padrão com concreto aparente, vidro e mobiliário sob medida.", span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Residência Alto da Serra", category: "Residencial", image: project4, year: "2022", description: "Casa de 1.200m² no topo de uma colina com vista de 360° e geometria angular marcante.", span: "md:col-span-1 md:row-span-1" },
  { id: 5, title: "Penthouse Jardins", category: "Interiores", image: project5, year: "2023", description: "Cobertura duplex de 400m² com vista panorâmica para a cidade e acabamentos premium.", span: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Casa da Luz", category: "Residencial", image: project6, year: "2021", description: "Residência minimalista que usa a luz natural como elemento arquitetônico central.", span: "md:col-span-2 md:row-span-1" },
];

const categories: Category[] = ["Todos", "Residencial", "Comercial", "Interiores"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Category>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useScrollReveal(0.05);

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-32 lg:py-44 bg-secondary">
      <div ref={ref} className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfólio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Projetos <em className="italic">selecionados</em>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-1 ${
                filter === cat
                  ? "text-foreground border-b border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group cursor-pointer overflow-hidden relative ${project.span}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end p-8">
                  <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
                      {project.category} &middot; {project.year}
                    </p>
                    <h3 className="font-heading text-2xl text-primary-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-full grid md:grid-cols-2 gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  {selectedProject.category} &middot; {selectedProject.year}
                </p>
                <h3 className="font-heading text-4xl lg:text-5xl font-light text-foreground mb-6">
                  {selectedProject.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Close"
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
