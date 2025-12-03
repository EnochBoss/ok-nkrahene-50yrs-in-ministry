import { useEffect } from "react";
import { setMeta } from "../utils/seo";
import Hero from "../components/Hero";
import EventCountdown from "../components/Countdown";
import TestimonialsByTheme from "../components/TestimonialsByTheme";

export default function Home() {
  useEffect(() => {
    setMeta({
      title: "Rev. O. K. Nkrahene — Celebrating 50 Years in Ministry",
      description: "Join us as we celebrate five decades of faithful ministry and the launch of Rev. Nkrahene's book."
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">

      {/* Hero */}
      <section className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded-lg p-6 md:p-8 mb-8 shadow-md transition-colors duration-300">
        <Hero />

        {/* Event Countdown */}
        <div className="max-w-4xl mx-auto mt-[-30px] md:mt-6">
          <EventCountdown date={"2025-12-05T10:00:00"} />
        </div>

        {/* Testimonials */}
        <div className="mt-10">
          <TestimonialsByTheme />
        </div>

        {/* Highlight Section */}
        <div className="mt-12 flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Text and CTA */}
          <div className="md:flex-1 flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text)] dark:text-[var(--text)]/90">
              Celebrating 50 Years of Ministry
            </h1>
            <p className="text-base sm:text-lg text-[var(--muted)] dark:text-[var(--muted)]/85">
              Join family, friends, and congregants to honor Rev. O. K. Nkrahene's 50 years of service and witness the book launch celebrating his life and legacy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href="/programme"
                className="px-6 py-3 rounded-full font-semibold w-full sm:w-auto text-center
                bg-[var(--gold-light)] text-black
                shadow-md shadow-[var(--gold-light)/30]
                hover:bg-[var(--gold-dark)] transition-all"
              >
                View Programme
              </a>
              <a
                href="/testimonials"
                className="px-6 py-3 rounded-full font-semibold w-full sm:w-auto text-center
                border border-[var(--gold-light)]
                hover:bg-[var(--gold-light)] hover:text-black transition-all"
              >
                Watch Testimonials
              </a>
            </div>
          </div>

          {/* Countdown Box */}
          <div className="md:w-96 mt-6 md:mt-0 mx-auto md:mx-0">
            <div className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded-lg p-4 shadow-md transition-colors duration-300">
              <h3 className="text-center font-bold mb-2 text-[var(--text)] dark:text-[var(--text)]/90">Event Countdown</h3>
              <EventCountdown date={"2025-12-05T10:00:00"} />
              <p className="text-sm text-center text-[var(--muted)] dark:text-[var(--muted)]/80 mt-2">
                Venue: First Baptist Church Auditorium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded p-4 shadow-md transition-colors duration-300">
          <h4 className="font-semibold mb-2 text-[var(--text)] dark:text-[var(--text)]">Book Launch</h4>
          <p className="text-sm text-[var(--muted)] dark:text-[var(--muted)]/85">
            Discover the newly launched biography honoring 50 years of ministry.
          </p>
          <a href="/book-launch" className="text-[var(--accent)] dark:text-[var(--gold-light)] block mt-3">Learn more →</a>
        </article>

        <article className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded p-4 shadow-md transition-colors duration-300">
          <h4 className="font-semibold mb-2 text-[var(--text)] dark:text-[var(--text)]">Video Testimonials</h4>
          <p className="text-sm text-[var(--muted)] dark:text-[var(--muted)]/85">
            Watch video tributes from mentees, colleagues, and family.
          </p>
          <a href="/testimonials" className="text-[var(--accent)] dark:text-[var(--gold-light)] block mt-3">Watch →</a>
        </article>

        <article className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded p-4 shadow-md transition-colors duration-300">
          <h4 className="font-semibold mb-2 text-[var(--text)] dark:text-[var(--text)]">Gallery</h4>
          <p className="text-sm text-[var(--muted)] dark:text-[var(--muted)]/85">
            View photos from the event (auto-populated from our shared folder).
          </p>
          <a href="/gallery" className="text-[var(--accent)] dark:text-[var(--gold-light)] block mt-3">Open Gallery →</a>
        </article>
      </section>
    </div>
  );
}
