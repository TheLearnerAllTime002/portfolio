import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import SkeletonLoader from "./components/SkeletonLoader";
import CommandPalette from "./components/CommandPalette";
import { myProjects, mySocials } from "./constants";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const startedAt = Date.now();
    const minimumDisplayTime = 1500;
    const pageImages = Array.from(document.images).map((image) => image.currentSrc || image.src);
    const projectImages = myProjects.flatMap((project) => [project.image, ...project.tags.map((tag) => tag.path)]);
    const socialImages = mySocials.map((social) => social.icon);
    const sources = [...new Set([...pageImages, ...projectImages, ...socialImages].filter(Boolean))];
    const imageLoads = sources.map((source) => new Promise((resolve) => {
      const image = new Image();
      let settled = false;
      const settle = () => {
        if (settled) return;
        settled = true;
        resolve();
      };
      image.onload = settle;
      image.onerror = settle;
      image.src = source;
      if (image.complete) settle();
    }));

    let timeoutId;
    Promise.race([
      Promise.all(imageLoads),
      new Promise((resolve) => { timeoutId = window.setTimeout(resolve, 9000); }),
    ]).then(() => {
      window.clearTimeout(timeoutId);
      const remaining = Math.max(0, minimumDisplayTime - (Date.now() - startedAt));
      window.setTimeout(() => {
        if (!active) return;
        window.setTimeout(() => {
          if (active) setIsLoading(false);
        }, 220);
      }, remaining);
    });

    return () => { active = false; window.clearTimeout(timeoutId); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("portfolio-loading", isLoading);
    return () => document.documentElement.classList.remove("portfolio-loading");
  }, [isLoading]);

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = document.querySelectorAll(".scroll-reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    root.classList.add("scroll-reveal-ready");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      root.classList.remove("scroll-reveal-ready");
    };
  }, []);

  return (
    <>
      {isLoading && <SkeletonLoader />}
      <div className={`container mx-auto max-w-7xl portfolio-content ${isLoading ? "portfolio-content-loading" : "portfolio-content-ready"}`}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/>
      </div>
      {!isLoading && <CommandPalette />}
    </>
  );
};

export default App;
