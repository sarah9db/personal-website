import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Indiana University, Bloomington",
    period: "Aug 2023 – May 2025",
    gpa: "3.8 / 4.0",
  },
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "National Institute of Technology, Goa",
    period: "Aug 2019 – May 2023",
    gpa: "8.75 / 10",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <GraduationCap className="text-primary mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
            <p className="text-primary text-sm font-medium mb-2">{edu.school}</p>
            <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
              <span>{edu.period}</span>
              <span className="text-primary">GPA: {edu.gpa}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
