import { useEffect } from "react";
import { setMeta } from "../utils/seo";

export default function Venue() {
  useEffect(() => {
    setMeta({
      title: "Venue — Rev. O. K. Nkrahene",
      description: "Venue information and map location for the 50th anniversary celebration."
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Venue & Location</h1>

      <div className="bg-white dark:bg-[#033a3c] rounded shadow overflow-hidden">
        <div className="p-4">
          <h2 className="font-semibold">First Baptist Church, Tema</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Community 5 Traffic Light, Tema, Ghana
          </p>
          <h2 className="font-semibold">Main Church Auditorium</h2>
        </div>

        {/* MAP */}
        <div className="w-full h-120 relative">
          <iframe
            title="Event Location"
            className="w-full h-full border-0 absolute top-0 left-0"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=first%20baptist%20church%20tema&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-[#011d1eff] pt-0 px-4 dark:bg-[#011d1eff]">
          *
          </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 pt-2 px-4 pb-4 dark:bg-[#033a3c]">
            *Please use the map above to navigate to the venue on the day of the event.
          </p>
      </div>
    </div>
  );
}
