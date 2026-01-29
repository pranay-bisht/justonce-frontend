import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="container">
        <h1>Privacy Policy</h1>

        <p className="page-text">
          JustOnce respects your privacy.
          We only collect your email if you voluntarily provide it.
        </p>

        <p className="page-text">
          Emails are used only to send supportive content.
          We never sell or share your data.
          You can unsubscribe anytime.
        </p>
      </main>

      <Footer />
    </>
  );
}
