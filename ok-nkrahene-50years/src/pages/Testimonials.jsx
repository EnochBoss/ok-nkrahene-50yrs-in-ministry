import { useEffect, useState } from "react";
import { setMeta } from "../utils/seo";
import YoutubeEmbed from "../components/YoutubeEmbed";

/*
  Place your YouTube video IDs in data arrays below.
  Example ID: for https://youtu.be/abcd1234 -> id is "abcd1234"
*/

const themedTestimonials = [
  {
    theme: "Leadership",
    videos: [{ id: "VIDEO_ID_1", title: "Leadership - Pastor John" }, { id: "VIDEO_ID_2", title: "Leadership - Sister Mary" }]
  },
  {
    theme: "Mentorship",
    videos: [{ id: "VIDEO_ID_3", title: "Mentorship - Rev. Paul" }]
  }
];

const fullTestimonials = [
  { id: "VIDEO_ID_10", title: "Full Testimony - Pastor John" },
  { id: "VIDEO_ID_11", title: "Full Testimony - Mrs. Akua" },
];

export default function Testimonials() {
  useEffect(() => {
    setMeta({
      title: "Testimonials — Rev. O. K. Nkrahene",
      description: "Video testimonials grouped by themes and full individual testimonies."
    });
  }, []);

  const [activeTheme, setActiveTheme] = useState(themedTestimonials[0]?.theme || "");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Video Testimonials</h1>

      {/* Themed */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">By Theme</h2>
        <div className="flex gap-2 mb-4 flex-wrap">
          {themedTestimonials.map(t => (
            <button
              key={t.theme}
              onClick={() => setActiveTheme(t.theme)}
              className={`px-3 py-1 rounded ${activeTheme === t.theme ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-700"}`}
            >
              {t.theme}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {themedTestimonials.find(t => t.theme === activeTheme)?.videos.map(v => (
            <div key={v.id}>
              <YoutubeEmbed id={v.id} title={v.title} />
              <p className="mt-2 font-semibold">{v.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Full Individual Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fullTestimonials.map(v => (
            <div key={v.id}>
              <YoutubeEmbed id={v.id} title={v.title} />
              <p className="mt-2 font-semibold">{v.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
