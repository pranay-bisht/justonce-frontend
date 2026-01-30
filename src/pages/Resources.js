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
              href="https://uwo.ca/se/thrive/blog/2024/the-science-behind-habits-how-the-brain-forms-and-breaks-them.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Science Behind Habits: How the Brain Forms and Breaks Them (Western University)
            </a>
          </li>

          <li>
            <a
              href="https://www.psychologytoday.com/us/basics/habit-formation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Habit Formation (Psychology-today)
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
              href="https://www.researchgate.net/publication/309282098_Understanding_the_psychology_of_mobile_gambling_A_behavioural_synthesis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Understanding the psychology of mobile gambling: A behavioural synthesis (National Council on Problem Gambling)
            </a>
          </li>

          <li>
            <a
              href="https://responsiblegambling.org/for-the-public/about-gambling/the-science-behind-gambling/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Science Behind Gambling (Responsible Gambling Council)
            </a>
          </li>
        </ul>

        <h2>When additional support is needed</h2>
        <p className="page-text">
          JustOnce is not therapy and does not replace professional help.
          If gambling is causing significant distress or harm,
          speaking with a qualified mental health professional can be valuable.
          We offer newsletters, focused on reflection rather than action.
        </p>
      </main>

      <Footer />
    </>
  );
}
