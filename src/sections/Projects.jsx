import { useState } from "react";
import Project from "../components/Project";
import { myProjects, projectCategories } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? myProjects
      : myProjects.filter((p) => p.category === activeCategory);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing" id="work"
    >
      <h2 className="text-heading">My Selected Projects</h2>

      {/* Category filter bar */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer backdrop-blur-md transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-aqua/20 border-aqua/60 text-white shadow-[0_0_18px_rgba(51,194,204,0.35)]"
                : "bg-white/5 border-white/15 text-neutral-400 hover:text-white hover:border-white/35"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {filteredProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
