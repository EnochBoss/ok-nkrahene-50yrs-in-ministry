import { useState } from "react";

export default function WishesForm() {
  const [name, setName] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const wish = {
      name: anonymous ? "Anonymous" : (name || "Anonymous"),
      message,
      timestamp: new Date().toISOString()
    };

    // For now we'll save wishes to localStorage (free). Later we can export them if needed.
    const existing = JSON.parse(localStorage.getItem("wishes") || "[]");
    existing.unshift(wish);
    localStorage.setItem("wishes", JSON.stringify(existing));

    setSubmitted(true);
    setName("");
    setMessage("");
    setAnonymous(false);
  };

  const wishes = JSON.parse(localStorage.getItem("wishes") || "[]");

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-3">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            disabled={anonymous}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-gray-900"
            placeholder="Your name (optional)"
          />
        </div>

        <div className="flex items-center gap-2">
          <input id="anon" type="checkbox" checked={anonymous} onChange={() => setAnonymous(!anonymous)} />
          <label htmlFor="anon" className="text-sm">Post as Anonymous</label>
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-gray-900"
            rows="4"
            placeholder="Write your message..."
          />
        </div>

        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </div>

        {submitted && <p className="text-green-600">Thank you — your wish has been saved.</p>}
      </form>

      <div className="mt-6">
        <h3 className="font-semibold mb-3">Recent Wishes</h3>
        {wishes.length === 0 && <p className="text-gray-600">No wishes yet.</p>}
        <ul className="space-y-3">
          {wishes.map((w, i) => (
            <li key={i} className="bg-white dark:bg-gray-800 p-3 rounded shadow">
              <div className="flex justify-between items-center">
                <div className="font-semibold">{w.name}</div>
                <div className="text-xs text-gray-500">{new Date(w.timestamp).toLocaleString()}</div>
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{w.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
