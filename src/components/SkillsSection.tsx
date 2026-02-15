import { motion } from "framer-motion";

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
    <section id="skills" className="section-padding max-w-6xl mx-auto">
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
    </section>
  );
};

export default SkillsSection;
