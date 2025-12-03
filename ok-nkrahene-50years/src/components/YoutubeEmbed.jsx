export default function YoutubeEmbed({ videoId }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Testimonial Video"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
      />
    </div>
  );
}
