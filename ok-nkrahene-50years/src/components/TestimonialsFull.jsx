import YoutubeEmbed from "./YoutubeEmbed";

const testimonials = [
  {
    id: 1,
    name: "Rev. Dr. Samuel Mensah",
    role: "General Overseer, Kingdom Life Chapel",
    background:
      "A long-time ministry colleague who has worked with Rev. Nkrahene on missions and crusades for over 25 years.",
    videoId: "your_video_id_here"
  },
  {
    id: 2,
    name: "Mrs. Abena Owusu",
    role: "Former church administrator",
    background:
      "She served closely in administrative and counselling roles during the early years of the ministry.",
    videoId: "another_video_id"
  }
];

export default function TestimonialsFull() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Full Testimonials
      </h2>

      <div className="space-y-16">
        {testimonials.map((item) => (
          <div key={item.id} className="w-full">
            {/* FULL-WIDTH VIDEO */}
            <div className="w-full mb-6">
              <YoutubeEmbed videoId={item.videoId} />
            </div>

            {/* DESCRIPTION */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {item.role}
              </p>

              <p className="text-gray-700 dark:text-gray-200">
                {item.background}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
