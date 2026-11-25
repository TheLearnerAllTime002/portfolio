import { useEffect, useMemo, useRef, useState } from "react";

const RESUME_URL = "/Arjun_Mitra_Resume_Nov.pdf";
const EMAIL = "arjunmitra003@gmail.com";

const CommandPalette = () => {
  const [mode, setMode] = useState("closed");
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const paletteRef = useRef(null);
  const shortcutsCloseRef = useRef(null);

  const commands = useMemo(() => [
    { label: "Go to Home", detail: "Jump to the top of the portfolio", target: "home", keywords: "hero start" },
    { label: "Go to About", detail: "Profile and technical toolkit", target: "about", keywords: "skills about me" },
    { label: "Go to Projects", detail: "Browse selected project work", target: "work", keywords: "project work portfolio" },
    { label: "Go to Experience", detail: "Education, internships and leadership", target: "experience-section", keywords: "experience internship timeline" },
    { label: "Go to Contact", detail: "Open the contact section", target: "contact", keywords: "email message" },
    { label: "Download Resume", detail: "Download Arjun Mitra’s resume PDF", action: "resume", keywords: "cv pdf resume" },
    { label: copied ? "Email copied" : "Copy email address", detail: EMAIL, action: "email", keywords: "copy email clipboard" },
  ], [copied]);

  const filteredCommands = commands.filter((command) =>
    `${command.label} ${command.detail} ${command.keywords}`.toLowerCase().includes(query.toLowerCase())
  );

  const runCommand = async (command) => {
    if (!command) return;
    if (command.target) {
      document.getElementById(command.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (command.action === "resume") {
      const link = document.createElement("a");
      link.href = RESUME_URL;
      link.download = "Arjun_Mitra_Resume_Nov.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else if (command.action === "email") {
      try {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } catch {
        window.location.href = `mailto:${EMAIL}`;
      }
    }
    setMode("closed");
    setQuery("");
  };

  useEffect(() => {
    if (mode === "commands") inputRef.current?.focus();
    if (mode === "shortcuts") shortcutsCloseRef.current?.focus();
    if (mode !== "closed") {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previousOverflow; };
    }
    return undefined;
  }, [mode]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, mode]);

  useEffect(() => {
    const isTyping = (target) => target instanceof HTMLElement && (
      target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
    );

    const moveProject = (direction) => {
      const cards = Array.from(document.querySelectorAll("[data-project-card]"));
      if (!cards.length) return;
      const anchor = 120;
      let targetIndex;
      if (direction > 0) {
        targetIndex = cards.findIndex((card) => card.getBoundingClientRect().top > anchor);
        if (targetIndex < 0) targetIndex = cards.length - 1;
      } else {
        targetIndex = -1;
        cards.forEach((card, index) => {
          if (card.getBoundingClientRect().top < anchor) targetIndex = index;
        });
        targetIndex = Math.max(0, targetIndex - 1);
      }
      cards[targetIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const handleKeyDown = (event) => {
      const typing = isTyping(event.target);
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMode("commands");
        return;
      }
      if (!typing && event.key === "?") {
        event.preventDefault();
        setMode((current) => current === "shortcuts" ? "closed" : "shortcuts");
        return;
      }
      if (mode === "closed") {
        if (!typing && !document.querySelector("[data-modal-container]") && event.key.toLowerCase() === "j") moveProject(1);
        if (!typing && !document.querySelector("[data-modal-container]") && event.key.toLowerCase() === "k") moveProject(-1);
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        setMode("closed");
      } else if (event.key === "Tab") {
        const focusable = Array.from(paletteRef.current?.querySelectorAll("button:not([disabled]), input") || []);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      } else if (mode === "commands" && event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((index) => Math.min(index + 1, filteredCommands.length - 1));
      } else if (mode === "commands" && event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((index) => Math.max(index - 1, 0));
      } else if (mode === "commands" && event.key === "Enter") {
        event.preventDefault();
        runCommand(filteredCommands[selectedIndex]);
      }
    };

    const openPalette = () => { setMode("commands"); setQuery(""); };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("portfolio:open-command-palette", openPalette);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("portfolio:open-command-palette", openPalette);
    };
  }, [filteredCommands, mode, selectedIndex]);

  if (mode === "closed") return null;

  return (
    <div className="command-palette-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setMode("closed"); }}>
      <section ref={paletteRef} className="command-palette" role="dialog" aria-modal="true" aria-label={mode === "commands" ? "Command palette" : "Keyboard shortcuts"}>
        {mode === "commands" ? (
          <>
            <div className="command-search-wrap">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" /></svg>
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What would you like to do?" aria-label="Search commands" />
              <kbd>ESC</kbd>
            </div>
            <p className="command-section-label">QUICK ACTIONS</p>
            <div className="command-results" role="listbox" aria-label="Commands">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.label}
                  type="button"
                  role="option"
                  aria-selected={selectedIndex === index}
                  className={`command-result ${selectedIndex === index ? "command-result-active" : ""}`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => runCommand(command)}
                >
                  <span className="command-result-icon">{command.action === "resume" ? "↓" : command.action === "email" ? "✉" : "↗"}</span>
                  <span className="command-result-copy"><strong>{command.label}</strong><small>{command.detail}</small></span>
                  {selectedIndex === index && <kbd>↵</kbd>}
                </button>
              ))}
              {filteredCommands.length === 0 && <p className="command-empty">No matching actions.</p>}
            </div>
            <div className="command-footer"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> select</span><button type="button" onClick={() => setMode("shortcuts")}>Keyboard shortcuts <kbd>?</kbd></button></div>
          </>
        ) : (
          <div className="shortcut-sheet">
            <div className="shortcut-sheet-heading"><div><p className="command-section-label">KEYBOARD-FIRST NAVIGATION</p><h2>Shortcuts</h2></div><button ref={shortcutsCloseRef} type="button" className="shortcut-close" onClick={() => setMode("closed")} aria-label="Close shortcuts">×</button></div>
            <div className="shortcut-row"><span>Open command palette</span><kbd>Ctrl</kbd><kbd>K</kbd></div>
            <div className="shortcut-row"><span>Next project</span><kbd>J</kbd></div>
            <div className="shortcut-row"><span>Previous project</span><kbd>K</kbd></div>
            <div className="shortcut-row"><span>Show shortcuts</span><kbd>?</kbd></div>
            <div className="shortcut-row"><span>Close dialog</span><kbd>Esc</kbd></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CommandPalette;
