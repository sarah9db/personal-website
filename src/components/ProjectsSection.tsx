import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, Zap } from "lucide-react";
import deepfilterImg from "@/assets/deepfilternet-visual.jpg";

const featuredProject = {
  title: "DeepFilterNet",
  subtitle: "Low Complexity Speech Enhancement Framework",
  description:
    "A full-band (48kHz) speech enhancement framework using deep filtering. Built a real-time noise suppression pipeline with PipeWire integration, achieving stable 10ms latency. Core technology behind the AI work at Aynak.",
  tech: ["Python", "Rust", "C++", "PyTorch", "DSP"],
  stats: { commits: "1,600+", branches: 23 },
  github: "https://github.com/sarah9db/DeepFilterNet",
  image: deepfilterImg,
};

const projects = [
  {
    title: "AutoReach AI",
    tech: ["Selenium", "LLaMA", "Gemini", "SMTP"],
    description:
      "AI-powered email outreach agent that automated cold email personalization and delivery, reducing manual effort by 85% and increasing response rates by 40%.",
    github: "https://github.com/sarah9db/AutoReach",
  },
  {
    title: "Transformers Sentiment Analysis",
    tech: ["PyTorch", "TensorFlow", "HuggingFace"],
    description:
      "Deep learning sentiment analysis model fine-tuned on a custom IMDb movie review dataset to classify reviews using state-of-the-art transformer architectures.",
    github: "https://github.com/sarah9db/transformers-sentiment-analysis",
  },
  {
    title: "Edu Grants Causal Discovery",
    tech: ["gCastle", "Python", "Causal AI"],
    description:
      "Causal discovery analysis of grant giving on education outcomes, uncovering hidden causal relationships in funding and educational attainment data.",
    github: "https://github.com/sarah9db/edu-grants-causal",
  },
  {
    title: "Spoken Term Detection",
    tech: ["Librosa", "NumPy", "DTW"],
    description:
      "Query-by-Example detection using Segmental Dynamic Time Warping, achieving 87.3% accuracy with posterior probability-weighted distance calculations.",
    github: "https://github.com/sarah9db/spoken-term-detection",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />
      </motion.div>

      {/* Featured Project - DeepFilterNet */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="relative rounded-2xl overflow-hidden border border-border bg-card group">
          <div className="grid md:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={featuredProject.image}
                alt="DeepFilterNet visualization"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <Zap size={20} className="text-primary" />
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Core AI Framework
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                {featuredProject.subtitle}
              </p>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GitFork size={14} className="text-primary" />
                  <span>{featuredProject.stats.commits} commits</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star size={14} className="text-primary" />
                  <span>{featuredProject.stats.branches} branches</span>
                </div>
              </div>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity w-fit"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card rounded-xl p-6 border border-border hover:border-glow hover:glow transition-all duration-300 block"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors mt-1"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-1 rounded bg-secondary text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-secondary-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
