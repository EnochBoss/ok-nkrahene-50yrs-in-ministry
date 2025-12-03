import EventCountdown from "../components/Countdown";
import { useEffect } from "react";
import { setMeta } from "../utils/seo";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import TestimonialsByTheme from "../components/TestimonialsByTheme";

export default function Home() {
  useEffect(() => {
    setMeta({
      title: "Rev. O. K. Nkrahene — Celebrating 50 Years in Ministry",
      description: "Join us as we celebrate five decades of faithful ministry and the launch of Rev. Nkrahene's book."
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-blue-50 dark:from-[#033a3c] dark:to-[#033a3c] rounded-lg p-8 mb-8 shadow">
        <Hero />
      <div className="max-w-6xl mx-auto p-2 ">
         <EventCountdown date={"2025-12-05T10:00:00"} />
      </div>
     
      <TestimonialsByTheme />
        
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 dark:text-blue-300">Celebrating 50 Years of Ministry</h1>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Join family, friends, and congregants to honor Rev. O. K. Nkrahene's 50 years of service and witness the book launch celebrating his life and legacy.
            </p>
            <div className="flex gap-3">
              <a href="/programme" className="bg-[#f50404ff] text-white px-4 py-2 rounded">View Programme</a>
              <a href="/testimonials" className="bg-[#033537ff] border px-4 py-2 rounded">Watch Testimonials</a>
            </div>
          </div>

          <div className="md:w-96 mt-6 md:mt-0">
            <div className="bg-white dark:bg-[#022223ff] rounded-lg p-4 shadow">
              <h3 className="text-center font-bold mb-2">Event Countdown</h3>
              <EventCountdown date={"2025-12-05T10:00:00"} />
              <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">Venue: First Baptist Church Auditorium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-4">
        <article className="bg-white dark:bg-[#033a3c] rounded p-4 shadow">
          <h4 className="font-semibold mb-2">Book Launch</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Discover the newly launched biography honoring 50 years of ministry.</p>
          <a href="/book-launch" className="text-blue-600 block mt-3">Learn more →</a>
        </article>

        <article className="bg-white dark:bg-[#033a3c] rounded p-4 shadow">
          <h4 className="font-semibold mb-2">Video Testimonials</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Watch video tributes from mentees, colleagues, and family.</p>
          <a href="/testimonials" className="text-blue-600 block mt-3">Watch →</a>
        </article>

        <article className="bg-white dark:bg-[#033a3c] rounded p-4 shadow">
          <h4 className="font-semibold mb-2">Gallery</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">View photos from the event (auto-populated from our shared folder).</p>
          <a href="/gallery" className="text-blue-600 block mt-3">Open Gallery →</a>
        </article>
      </section>
    </div>
  );
}
