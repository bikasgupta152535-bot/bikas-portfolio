// Skill proficiency is intentionally left generic (no invented percentages).
// [EDIT HERE]: adjust "level" (Beginner / Intermediate / Proficient) per skill if you'd like.

export const skillGroups = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: "Proficient" },
      { name: "C", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: "Proficient" },
      { name: "CSS", level: "Proficient" },
      { name: "React", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
    ],
  },
];
