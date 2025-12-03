export default function WhatsAppShare({ text }) {
  const url = encodeURIComponent(window.location.href);
  const message = encodeURIComponent(text || "Join the celebration!");
  const whatsappLink = `https://wa.me/?text=${message}%20${url}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition z-50"
      aria-label="Share on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.478A11.947 11.947 0 0 0 12 0C5.373 0 .03 5.343 0 11.97c.004 2.09.547 4.158 1.586 5.99L0 24l6.297-1.646A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.204-1.25-6.21-3.48-8.522zM12 21.6c-1.42 0-2.806-.366-4.032-1.058l-.287-.168-3.739.98.999-3.653-.187-.296A8.4 8.4 0 0 1 3.6 11.97C3.6 7.084 7.114 3.57 12 3.57s8.4 3.514 8.4 8.4S16.886 20.97 12 20.97z"/><path d="M17.65 13.26c-.307-.154-1.814-.895-2.095-.995-.281-.102-.486-.154-.69.155-.204.307-.787.995-.965 1.197-.178.204-.357.23-.664.077-.307-.154-1.295-.477-2.465-1.52-.91-.8-1.525-1.79-1.704-2.097-.178-.307-.02-.473.135-.627.138-.137.307-.357.461-.536.153-.179.204-.307.307-.512.102-.204.051-.384-.025-.538-.077-.153-.69-1.663-.945-2.285-.249-.58-.503-.501-.69-.51l-.588-.01c-.204 0-.537.077-.82.384-.281.307-1.07 1.045-1.07 2.548s1.096 2.95 1.25 3.153c.154.204 2.162 3.3 5.244 4.63 3.082 1.331 3.082.888 3.639.83.558-.059 1.814-.741 2.073-1.453.26-.712.26-1.323.181-1.453-.077-.13-.281-.204-.588-.358z"/></svg>
      <span className="text-sm font-medium">Share</span>
    </a>
  );
}
