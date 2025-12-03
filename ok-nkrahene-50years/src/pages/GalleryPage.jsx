import { useEffect, useState } from "react";
import { fetchDriveImages } from "../utils/driveApi";
import { setMeta } from "../utils/seo";

const FOLDER_ID = "1luTYzUt2zFSO0wkl4sB8zYCiLabB5w7T";
const UPLOAD_LINK = "https://drive.google.com/drive/folders/1luTYzUt2zFSO0wkl4sB8zYCiLabB5w7T?usp=sharing";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMeta({ 
      title: "Gallery — Rev. O. K. Nkrahene", 
      description: "Photos from the celebration." 
    });

    let mounted = true;
    fetchDriveImages(FOLDER_ID)
      .then(urls => { if (mounted) setImages(urls); })
      .catch(console.error)
      .finally(() => { if (mounted) setLoading(false); });

    return () => (mounted = false);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Event Photo Gallery</h1>

      <div className="bg-blue-50 dark:bg-[#033a3c]/40 p-4 rounded-md border mb-6">
        <p className="mb-3 text-gray-700 dark:text-gray-300">
          Did you take pictures at the event? Please upload them to our shared Google Drive folder using the link below.
          Photos uploaded to that folder will appear here automatically.
        </p>

        <a
          href={UPLOAD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#055659ff] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent)]/70"
        >
          Upload Your Pictures Here
        </a>
      </div>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading images…</p>
      ) : images.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No photos yet — check back later.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img key={i} src={img} alt={`event-${i}`} className="w-full h-48 object-cover rounded shadow" />
          ))}
        </div>
      )}
    </div>
  );
}
