import { useState } from "react";
import { motion } from "motion/react";

const RESUME_URL = "/Arjun_Mitra_Resume_Nov.pdf";

const ResumeButton = ({ className = "", delay = 0 }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Arjun_Mitra_Resume_Nov.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/5 px-7 py-3 text-lg font-semibold text-white backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-aqua/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(51,194,204,0.25)] cursor-pointer ${className}`}
      title="Download Resume"
    >
      {/* Glass shine highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/20 to-transparent" />

      {downloading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin text-aqua"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8"
            />
          </svg>
          Downloading...
        </>
      ) : (
        <>
          <svg
            className="h-5 w-5 text-aqua transition-transform group-hover:translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"
            />
          </svg>
          Download Resume
        </>
      )}
    </motion.button>
  );
};

export default ResumeButton;
