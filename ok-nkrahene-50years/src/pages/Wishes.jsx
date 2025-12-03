export default function Wishes() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Leave Your Well Wishes</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">Your message will appear on the site. You can choose to be anonymous.</p>

      <form className="space-y-4 bg-[var(--surface)] p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Your Name (optional)"
          className="w-full p-3 border rounded"
        />

        <label className="flex items-center gap-2">
          <input type="checkbox" /> Keep my name anonymous
        </label>

        <textarea
          placeholder="Your message..."
          className="w-full p-3 h-32 border rounded"
          required
        ></textarea>

        <button className="bg-[#087e82ff] text-white px-6 py-2 rounded hover:bg-[#ef8b1fff]">
          Submit
        </button>
      </form>

      <p className="mt-8 text-center text-gray-500">Messages will appear here...</p>
    </div>
  );
}
