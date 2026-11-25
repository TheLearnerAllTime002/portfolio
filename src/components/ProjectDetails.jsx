import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  caseStudy,
  timelineBadge,
  closeModal,
}) => {
  const isLiveDemo = href && !href.includes("github.com");
  const [imageSrc, setImageSrc] = useState(image);
  const closeRef = useRef(null);

  // Reset placeholder image state when a new project opens
  useEffect(() => {
    setImageSrc(image);
  }, [image]);

  // Keyboard navigation: Esc closes, Tab cycles focus within the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Tab") {
        const modal = closeRef.current?.closest("[data-modal-container]");
        if (!modal) return;
        const focusables = modal.querySelectorAll(
          "a[href], button:not([disabled])",
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    // Lock background scroll while the modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus the close button on open
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [closeModal]);

  const printOnePager = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[character]);
    const stack = tags.map((tag) => escapeHtml(tag.name)).join(" · ");
    const details = caseStudy
      ? `<section class="case-study"><h2>Case study</h2>${[
        ["Problem", caseStudy.problem], ["Approach", caseStudy.approach], ["Result", caseStudy.result],
      ].map(([label, text]) => `<div><h3>${label}</h3><p>${escapeHtml(text)}</p></div>`).join("")}</section>`
      : `<section><h2>Project overview</h2>${subDescription.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}</section>`;

    printWindow.document.open();
    printWindow.document.write(`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(title)} — Project Brief</title><style>
      @page{size:A4;margin:18mm}*{box-sizing:border-box}body{max-width:760px;margin:0 auto;color:#18212b;font:14px/1.65 Arial,sans-serif}header{padding:0 0 22px;border-bottom:2px solid #1b8d91}header small{color:#17868b;font-size:10px;font-weight:bold;letter-spacing:.16em;text-transform:uppercase}h1{margin:10px 0 8px;font-size:30px;line-height:1.15}header p{color:#526171;font-size:15px}h2{margin:24px 0 12px;font-size:17px}h3{margin:0 0 4px;color:#167b80;font-size:12px;text-transform:uppercase;letter-spacing:.08em}section>p,.case-study p{margin:0 0 12px;color:#334155}.case-study>div{margin:0 0 14px;padding-left:12px;border-left:2px solid #8bd8d1}.metrics{margin-top:18px;padding:12px 15px;border-radius:8px;background:#eff8f7}footer{margin-top:28px;padding-top:12px;border-top:1px solid #d8e0e5;color:#64748b;font-size:11px;overflow-wrap:anywhere}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}
    </style></head><body><header><small>Project one-pager${timelineBadge ? ` · ${escapeHtml(timelineBadge.label)}` : ""}</small><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></header>${details}<section class="metrics"><h2>Technology stack</h2><p>${stack}</p></section><footer>Arjun Mitra · arjunmitra003@gmail.com<br>${escapeHtml(href || "")}</footer><script>window.addEventListener('load',()=>setTimeout(()=>window.print(),250));</script></body></html>`);
    printWindow.document.close();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/50 p-4"
      onClick={closeModal}
      data-modal-container
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-y-auto hide-scrollbar"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          ref={closeRef}
          onClick={closeModal}
          aria-label="Close project details"
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="" />
        </button>

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-72 rounded-t-2xl object-cover"
            onError={() => setImageSrc("")}
          />
        ) : (
          <div className="w-full h-56 rounded-t-2xl bg-gradient-to-br from-navy via-indigo to-midnight flex items-center justify-center">
            <span className="text-5xl font-black bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent">
              {title.split(" ")[0]}
            </span>
          </div>
        )}

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {caseStudy && (
            <section className="project-case-study" aria-label="Project case study">
              <div className="project-case-study-heading">
                <p className="project-case-study-kicker">Case study</p>
                <p className="project-case-study-flow">Problem <span>→</span> Approach <span>→</span> Result</p>
              </div>
              <div className="project-case-study-grid">
                <article><h6>Problem</h6><p>{caseStudy.problem}</p></article>
                <article><h6>Approach</h6><p>{caseStudy.approach}</p></article>
                <article className="project-case-study-result"><h6>Result</h6><p>{caseStudy.result}</p></article>
              </div>
              <div className="project-case-study-stack"><span>Stack</span>{tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}</div>
            </section>
          )}
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400" key={index}>
              {subDesc}
            </p>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button type="button" className="project-one-pager-button" onClick={printOnePager}>
                Get PDF <span aria-hidden="true">↓</span>
              </button>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex overflow-hidden items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua ${
                  isLiveDemo
                    ? "border border-aqua/40 bg-aqua/10 text-white shadow-[0_0_20px_rgba(51,194,204,0.25)] hover:border-aqua/70 hover:bg-aqua/20 hover:shadow-[0_0_30px_rgba(51,194,204,0.45)]"
                    : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                }`}
              >
                {isLiveDemo && (
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent" />
                )}
                {isLiveDemo ? (
                  <>
                    Live Demo
                    <img src="assets/arrow-up.svg" className="size-4" alt="" />
                  </>
                ) : (
                  <>
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.54-1.375-1.325-1.742-1.325-1.742-1.08-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </>
                )}
              </a>
            )}
            </div>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded">Esc</kbd>{" "}
            to close
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
