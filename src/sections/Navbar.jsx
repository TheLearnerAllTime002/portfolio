import { useState } from "react";
import { motion } from "motion/react";
import ResumeButton from "../components/ResumeButton";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li mt-2">
        <button className="command-open-mobile" type="button" onClick={() => window.dispatchEvent(new Event("portfolio:open-command-palette"))}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3" /><path d="m15.5 15.5 4.2 4.2" /></svg>
          Quick actions <kbd>Ctrl + K</kbd>
        </button>
      </li>
      <li className="nav-li mt-2">
        <ResumeButton className="!px-5 !py-2 !text-base" />
      </li>
    </ul>
  );
}

function IconNavigation() {
  return (
    <div className="flex gap-6">
      <motion.a
        href="#home"
        className="nav-icon"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        title="Home"
      >
        <img src="assets/home.svg" className="w-6 h-6" alt="Home" />
      </motion.a>
      <motion.a
        href="#about"
        className="nav-icon"
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        title="About"
      >
        <img src="assets/about.svg" className="w-6 h-6" alt="About" />
      </motion.a>
      <motion.a
        href="#work"
        className="nav-icon"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        title="Work"
      >
        <img src="assets/work.svg" className="w-6 h-6" alt="Work" />
      </motion.a>
      <motion.a
        href="#contact"
        className="nav-icon"
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        title="Contact"
      >
        <img src="assets/contact.svg" className="w-6 h-6" alt="Contact" />
      </motion.a>
      <button
        type="button"
        className="nav-icon command-open-button"
        onClick={() => window.dispatchEvent(new Event("portfolio:open-command-palette"))}
        aria-label="Open command palette"
        title="Quick actions · Ctrl + K"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.3" /><path d="m15.5 15.5 4.2 4.2" />
        </svg>
        <span className="command-key-hint">Ctrl K</span>
      </button>
    </div>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`fixed inset-x-0 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:max-w-5xl z-20 w-full backdrop-blur-lg rounded-b-3xl shadow-2xl ${isOpen ? 'bg-gradient-to-r from-primary/60 via-primary/40 to-primary/60' : 'bg-transparent'}`}>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2">
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            AM
          </motion.a>
          <nav className="hidden sm:flex">
            <IconNavigation />
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden transition-colors"
          >
            <motion.img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
