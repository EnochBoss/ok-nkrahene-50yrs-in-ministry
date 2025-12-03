import WishesForm from "../components/WishesForm";
import { setMeta } from "../utils/seo";
import { useEffect } from "react";

export default function WishesPage() {
  useEffect(() => {
    setMeta({
      title: "Leave a Wish — Rev. O. K. Nkrahene",
      description: "Write and share your well wishes for Rev. Nkrahene's 50th anniversary."
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Leave Your Well Wishes</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Your message will appear on the site. You can choose to be anonymous.</p>
      <WishesForm />
    </div>
  );
}
