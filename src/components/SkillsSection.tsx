import { motion } from "framer-motion";
import { Brain, AudioWaveform, Database, FlaskConical } from "lucide-react";
import aiPattern from "@/assets/ai-pattern.jpg";

const focusAreas = [
  {
    icon: AudioWaveform,
    title: "Speech & Audio AI",
    description:
      "Real-time speech enhancement pipelines with sub-10ms latency. Deep filtering, DSP optimization, and neural noise suppression for production systems.",
  },
  {
    icon: Brain,
    title: "NLP & Language Models",
    description:
      "Fine-tuning transformers (RoBERTa, BERT, LLaMA) for classification, semantic matching, and zero-shot inference at scale with DeepSpeed optimization.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "End-to-end pipelines for data extraction, transformation, and loading. Automated scraping, cleaning, and integration across unstructured formats.",
  },
  {
    icon: FlaskConical,
    title: "Causal & Statistical Analysis",
    description:
      "Rigorous A/B testing, causal discovery, and multivariate analysis. Turning 20+ years of longitudinal data into actionable research insights.",
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "C++", "C", "Java", "JavaScript"],
  },
  {
    title: "Technologies",
    skills: ["TensorFlow", "PyTorch", "SQL", "Neo4j", "MongoDB", "GCP", "AWS", "Spark", "Tableau", "Power BI", "Angular", "Alteryx"],
  },
  {
    title: "Concepts",
    skills: ["Machine Learning", "Neural Networks", "LLMs", "Agentic AI", "HuggingFace", "Causal Inference", "A/B Testing", "Data Mining", "Cloud Computing", "Databricks"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      {/* What I Do */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aiPattern} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative section-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
              What I Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Areas of <span className="text-gradient">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card/60 backdrop-blur rounded-xl p-6 border border-border hover:border-glow hover:glow transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="section-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-glow transition-colors"
            >
              <h3 className="font-mono text-primary text-sm tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
