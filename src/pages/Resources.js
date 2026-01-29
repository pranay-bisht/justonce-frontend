import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resources() {
  return (
    <>
      <Navbar />

      <main className="container">
        <h1>Resources</h1>

        <p className="page-text">
          JustOnce is built around awareness, not control.
          If you want to understand the patterns behind gambling behavior,
          the resources below offer thoughtful, evidence-based perspectives.
        </p>

        <h2>Understanding habits and decision-making</h2>
        <ul className="resource-list">
          <li>
            <a
              href="https://www.health.harvard.edu/mind-and-mood/the-habit-loop"
              target="_blank"
              rel="noopener noreferrer"
            >
              The habit loop — how routines form and repeat (Harvard Health)
            </a>
          </li>

          <li>
            <a
              href="https://www.apa.org/monitor/2015/03/habits"
              target="_blank"
              rel="noopener noreferrer"
            >
              How habits shape behavior (American Psychological Association)
            </a>
          </li>

          <li>
            <a
              href="https://fs.blog/decision-making/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Decision-making under uncertainty (Farnam Street)
            </a>
          </li>
        </ul>

        <h2>Gambling-specific research</h2>
        <ul className="resource-list">
          <li>
            <a
              href="https://www.ncpgambling.org/help-treatment/understanding-gambling-addiction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Understanding gambling behavior (National Council on Problem Gambling)
            </a>
          </li>

          <li>
            <a
              href="https://www.bbc.com/future/article/20150707-the-psychology-of-gambling"
              target="_blank"
              rel="noopener noreferrer"
            >
              The psychology behind gambling decisions (BBC Future)
            </a>
          </li>
        </ul>

        <h2>When additional support is needed</h2>
        <p className="page-text">
          JustOnce is not therapy and does not replace professional help.
          If gambling is causing significant distress or harm,
          speaking with a qualified mental health professional can be valuable.
        </p>
      </main>

      <Footer />
    </>
  );
}
