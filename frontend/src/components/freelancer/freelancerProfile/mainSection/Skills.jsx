const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div className="h-auto py-6 border-t border-gray-300">
      {/* Header */}
      <h1 className="mb-6 text-3xl font-semibold text-gray-800">Skills</h1>

      {/* Skills List */}
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="inline-block px-4 py-2 text-sm font-medium text-gray-700 transition bg-gray-200 shadow-md rounded-2xl hover:bg-gray-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
