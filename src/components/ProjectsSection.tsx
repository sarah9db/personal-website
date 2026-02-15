import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AutoReach AI",
    tech: ["Selenium", "LLaMA", "Gemini", "SMTP"],
    description:
      "AI-powered email outreach agent that automated cold email personalization and delivery, reducing manual effort by 85% and increasing response rates by 40%.",
    detail:
      "Integrated LLaMA and Gemini models, scaling outreach to 200+ recipients per batch for research collaboration.",
  },
  {
    title: "Spoken Term Detection",
    tech: ["Librosa", "Pandas", "Matplotlib", "NumPy"],
    description:
      "Query-by-Example Spoken Term Detection using Segmental Dynamic Time Warping, surpassing 81% accuracy and reducing computation time by 30%.",
    detail:
      "Calculated posterior probabilities as weights during distance calculations, improving model accuracy to 87.3%.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card rounded-xl p-6 border border-border hover:border-glow hover:glow transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground mt-1" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-secondary text-primary">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-secondary-foreground text-sm leading-relaxed mb-3">
              {project.description}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
