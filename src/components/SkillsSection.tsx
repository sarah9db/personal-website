import { motion } from "framer-motion";
import aiPattern from "@/assets/ai-pattern.jpg";

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

const impactStats = [
  { value: "66%", label: "Computational Load Reduction" },
  { value: "10ms", label: "Real-Time Latency" },
  { value: "87.3%", label: "Model Accuracy" },
  { value: "40%", label: "Faster Inference" },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      {/* Impact Stats Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aiPattern} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative section-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
              Impact by the Numbers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {stat.label}
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
