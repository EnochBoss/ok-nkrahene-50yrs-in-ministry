export default function DownloadProgramme() {
  return (
    <a
      href="/programme.pdf"
      download
      className="
        inline-block px-4 py-2 rounded shadow transition
        bg-blue-600 text-white hover:bg-blue-700
        dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400
      "
    >
      Download Programme (PDF)
    </a>
  );
}
