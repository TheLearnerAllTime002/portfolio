import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Web", "Cloud", "AI"];
  const variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-24 text-center md:mt-48 md:text-left bg-clip-text">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-6 c-space">
        <motion.h1
          className="text-4xl font-semibold tracking-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Hi, I’m Arjun
        </motion.h1>

        <div className="flex flex-col items-start gap-4">
          <motion.p
            className="text-[2.8rem] leading-tight font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Dedicated to Building <br />
            Modern & Intelligent
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
            className="mb-2"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl leading-none"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Solutions
          </motion.p>

          <motion.p
            className="mt-4 text-lg text-neutral-400 tracking-wide"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.9 }}
          >
            Full-stack Developer • Cloud Enthusiast • Gen AI Explorer
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-3xl font-semibold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Hi, I’m Arjun
        </motion.p>

        <motion.p
          className="text-4xl font-medium text-neutral-300 leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Dedicated to
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
          className="my-2"
        >
          <FlipWords
            words={words}
            className="font-black text-white text-7xl leading-none"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-medium text-neutral-300 leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          Experiences
        </motion.p>

        <motion.p
          className="mt-3 text-base text-neutral-400 tracking-wide"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.9 }}
        >
          <strong className="font-bold">Web • Cloud • AI</strong>
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
