import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setMessage("You’re not alone. A pause is on its way.");
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Get quiet support</h3>

      <p className="card-text">
        Occasional emails to help you pause, reflect,
        and resist the urge — just once.
      </p>

      <form className="email-form" onSubmit={submit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Get support"}
        </button>

        <p className="small">
          No spam. No judgment. Unsubscribe anytime.
        </p>
      </form>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}