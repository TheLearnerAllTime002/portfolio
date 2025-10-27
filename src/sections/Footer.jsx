import { motion } from "motion/react";
import { mySocials } from "../constants";
const Footer = () => {
  return (
    <motion.section
      className="relative flex flex-wrap items-center justify-between gap-5 pb-4 pt-4 text-sm text-neutral-400 c-space bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-md rounded-t-3xl shadow-2xl border-t border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-aqua/5 via-transparent to-mint/5 rounded-t-3xl"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="mb-4 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[2px] w-full rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <motion.div className="flex gap-3 z-10">
        <motion.p
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Terms & Conditions
        </motion.p>
        <p>|</p>
        <motion.p
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Privacy Policy
        </motion.p>
      </motion.div>
      <motion.div className="flex gap-4 z-10">
        {mySocials.map((social, index) => (
          <motion.a
            href={social.href}
            key={index}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </motion.a>
        ))}
      </motion.div>
      <motion.p
        className="z-10 bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent"
        whileHover={{ scale: 1.02 }}
      >
        © 2025 Arjun Mitra. All rights reserved.
      </motion.p>
    </motion.section>
  );
};

export default Footer;
