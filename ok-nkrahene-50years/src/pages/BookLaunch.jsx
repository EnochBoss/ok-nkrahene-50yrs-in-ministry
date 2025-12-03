import { useEffect } from "react";
import { setMeta } from "../utils/seo";

export default function BookLaunch() {
  useEffect(() => {
    setMeta({
      title: "Book Launch — Rev. O. K. Nkrahene",
      description: "Learn about the book launched to commemorate Rev. Nkrahene's 50 years in ministry."
    });
  }, []);

  const buyLink = "https://wa.me/233202051665"; // WhatsApp chat link

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-[#033a3c] rounded-lg shadow overflow-hidden">
        
        {/* BOOK COVER IMAGE FULL WIDTH */}
        <div className="w-full">
          <img
            src="/book-cover-sm.jpg"
            alt="Book cover"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CONTENT BELOW IMAGE */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 text-[var(--text)] dark:text-[var(--text)]">
            The Irresistible Hand of God — A Life Redeemed for a Purpose
          </h1>
          <p className="mb-4 text-[var(--muted)] dark:text-[var(--muted)]">
            This commemorative book tells the story of Rev. O. K. Nkrahene's life and ministry across five decades.
          </p>
          <p className="mb-4 text-sm text-[var(--muted)] dark:text-[var(--muted)]">
            Purchase proceeds will go to the church development fund.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--gold-light)] dark:bg-[var(--gold-dark)] text-black dark:text-white px-4 py-2 rounded font-semibold hover:brightness-110 transition"
            >
              Buy / Order
            </a>
            <a
              href="/programme.pdf"
              className="border border-[var(--gold-light)] dark:border-[var(--gold-dark)] px-4 py-2 rounded hover:bg-[var(--gold-light)] dark:hover:bg-[var(--gold-dark)] transition"
            >
              Download Programme
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
