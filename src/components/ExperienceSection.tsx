import { motion } from "framer-motion";
import dataVisual from "@/assets/data-visual.jpg";

const experiences = [
  {
    role: "Founding AI Engineer",
    company: "Aynak",
    location: "San Diego, CA",
    period: "Aug 2025 – Present",
    bullets: [
      "Led core AI development, engineering a low-latency speech-enhancement pipeline that cut computational load by 66% while achieving stable 10ms real-time performance.",
      "Refactored and stabilized 3,000+ lines of DSP/C++ inference code, improving throughput by 20–35% and eliminating dense-layer failures.",
      "Evaluated and benchmarked 6+ speech-enhancement architectures, reducing latency by 50% while maintaining spectral accuracy.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Project 990",
    location: "Remote",
    period: "Mar 2024 – Aug 2025",
    bullets: [
      "Leveraged RoBERTa for zero-shot text classification on 10,000+ mission statements per batch; optimized inference with DeepSpeed, reducing classification time by 40%.",
      "Engineered five end-to-end data pipelines, resulting in a 35% increase in processing efficiency and a 23% reduction in integration errors.",
      "Created 10+ Tableau dashboards, enabling 36% faster strategic decisions.",
    ],
  },
  {
    role: "Research Scientist (Advanced Analytics)",
    company: "Kelly School of Business",
    location: "Bloomington, IN",
    period: "Mar 2025 – Jul 2025",
    bullets: [
      "Analyzed health outcomes and mortality of 1,200+ entrepreneurs over 20 years using the MIDUS dataset with multivariate stats.",
      "Investigated 30+ variables (business, health, personality) to uncover key health trends and risks.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Public Budgeting and Finance",
    location: "Bloomington, IN",
    period: "May 2024 – Mar 2025",
    bullets: [
      "Built an automated email service and website, leading to 11% increase in research engagement.",
      "Deployed frontend and backend on a single Heroku dyno, reducing hosting costs by 30%.",
      "Leveraged pretrained BERT models and cosine similarity, improving matching accuracy by 85%.",
    ],
  },
  {
    role: "Data Science Research Assistant",
    company: "O'Neil School of Public Affairs",
    location: "Bloomington, IN",
    period: "Sep 2024 – Jan 2025",
    bullets: [
      "Implemented A/B testing protocols comparing regex with fuzzy logic, improving extraction rates by 30%.",
      "Developed pipelines to automate data extraction from highly variable document formats.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative">
      {/* Visual break - full-width image band */}
      <div className="relative h-40 md:h-56 overflow-hidden">
        <img
          src={dataVisual}
          alt="Data visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-sm tracking-[0.3em] uppercase"
          >
            Where I've Made Impact
          </motion.p>
        </div>
      </div>

      <div className="section-padding max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-8 md:pl-14"
              >
                <div className="absolute left-0 md:left-4 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-primary font-medium">@ {exp.company}</span>
                </div>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {exp.location} · {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-secondary-foreground text-sm leading-relaxed flex gap-3">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
