const projects = [
  {
    number: "01",
    title: "The Academy Hub",
    description:
      "A comprehensive management platform for a modern football academy, designed around type-safe, scalable workflows for players and coaches.",
    stack: "TypeScript",
    href: "https://github.com/ayushnegiexe/the-academy-hub"
  },
  {
    number: "02",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered application that evaluates resumes against job roles, identifies gaps, scores compatibility, and gives actionable improvement suggestions.",
    stack: "React · Node.js · AI · REST APIs",
    href: "https://github.com/ayushnegiexe/AI-Resume-analyzer"
  },
  {
    number: "03",
    title: "AI Ticket Assistant",
    description:
      "A full-stack support system that classifies tickets, determines priority, analyzes issues with AI, and helps generate useful responses.",
    stack: "React · Node.js · AI · Database",
    href: "https://github.com/ayushnegiexe/AI-ticket-assistant"
  },
  {
    number: "04",
    title: "Lexical Analyzer",
    description:
      "A compiler-design project implementing lexical analysis and token generation from lexical specifications.",
    stack: "Java · Lex · Compiler Design",
    href: "https://github.com/ayushnegiexe/lex-compiler"
  }
];

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js",
  "Express.js", "Java", "Python", "MongoDB",
  "SQL", "REST APIs", "AI APIs", "LLM Applications",
  "Git", "GitHub", "Postman"
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">AN<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/ayushnegiexe" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">FULL-STACK DEVELOPER · AI & SOFTWARE ENGINEERING</p>
        <h1>
          I turn ideas
          <br />
          into <em>things</em>
          <br />
          that work.
        </h1>
        <div className="heroBottom">
          <p>
            I build full-stack web applications and AI-powered software with a
            focus on practical functionality, clean architecture, and solving
            real problems.
          </p>
          <a className="circleLink" href="#work" aria-label="View selected work">↓</a>
        </div>
      </section>

      <div className="rule" />

      <section className="section" id="work">
        <div className="sectionHead">
          <span>(01)</span>
          <h2>Selected work</h2>
          <span>Projects / 2024—26</span>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
              <span className="projectNumber">{project.number}</span>
              <div className="projectMain">
                <h3>{project.title}<span>↗</span></h3>
                <p>{project.description}</p>
              </div>
              <span className="projectStack">{project.stack}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="statement">
        <p>Building software that is</p>
        <h2>useful, thoughtful<br />and built to last.</h2>
      </section>

      <section className="section about" id="about">
        <div className="sectionHead">
          <span>(02)</span>
          <h2>About</h2>
          <span>Currently building</span>
        </div>
        <div className="aboutGrid">
          <div>
            <p className="largeCopy">
              I like turning ideas into things that actually work.
            </p>
          </div>
          <div className="aboutCopy">
            <p>
              I&apos;m Ayush Negi, a full-stack developer working across
              JavaScript, TypeScript, React, Node.js, Java and Python, with a
              growing focus on AI applications.
            </p>
            <p>
              I enjoy building practical products, backend systems, APIs and
              database-driven applications while continuously improving my
              software engineering fundamentals.
            </p>
            <p>
              Right now I&apos;m sharpening advanced JavaScript and TypeScript,
              React architecture, Node.js, Java and DSA, AI application
              development, and system design.
            </p>
          </div>
        </div>
      </section>

      <section className="section skills">
        <div className="sectionHead">
          <span>(03)</span>
          <h2>Toolkit</h2>
          <span>Things I work with</span>
        </div>
        <div className="skillGrid">
          {skills.map((skill, i) => (
            <span key={skill}><b>{String(i + 1).padStart(2, "0")}</b>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">HAVE AN IDEA?</p>
        <h2>Let&apos;s build<br /><em>something.</em></h2>
        <a className="email" href="mailto:ayushnegiexe@gmail.com">ayushnegiexe@gmail.com ↗</a>
        <div className="socials">
          <a href="https://github.com/ayushnegiexe" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-negi-exe" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/_ayush.negi_" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://x.com/AyushNegi229215" target="_blank" rel="noreferrer">X</a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Ayush Negi</span>
        <span>Building. Learning. Improving.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}