export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Event Gallery</h1>

      <p className="text-center mb-6">
        Photos from the Google Drive folder will appear here.
      </p>

      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Upload Photo
        </button>
      </div>
    </div>
  );
}
