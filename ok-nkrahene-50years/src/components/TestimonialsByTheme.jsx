import YoutubeEmbed from "./YoutubeEmbed";

const themes = [
  {
    theme: "Early Ministry",
    description: "Stories highlighting the beginning stages of Rev. Nkrahene’s calling.",
    videos: [
      {
        videoId: "abc123",
        name: "Pastor John Doe",
        background: "A childhood friend and early ministry supporter."
      }
    ]
  },
  {
    theme: "Family & Personal Impact",
    description: "Testimonies about his influence on individuals and families.",
    videos: [
      {
        videoId: "xyz456",
        name: "Sister Ama Serwaa",
        background: "A long-time church member who witnessed his personal mentoring."
      }
    ]
  }
];

export default function TestimonialsByTheme() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Testimonials by Theme
      </h2>

      <div className="space-y-16">
        {themes.map((group, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-2">{group.theme}</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {group.description}
            </p>

            <div className="space-y-12">
              {group.videos.map((v, i) => (
                <div key={i}>
                  {/* FULL WIDTH VIDEO */}
                  <YoutubeEmbed videoId={v.videoId} />

                  {/* DESCRIPTION */}
                  <div className="bg-gray-50 dark:bg-[#055053ff] p-6 mt-4 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">{v.name}</h4>
                    <p className="text-gray-600 dark:text-gray-200">{v.background}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
