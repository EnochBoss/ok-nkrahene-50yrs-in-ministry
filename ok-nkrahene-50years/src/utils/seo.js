export function setMeta({ title, description }) {
  if (title) document.title = title;
  const descriptionMeta = document.querySelector("meta[name='description']");
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", description || "");
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = description || "";
    document.head.appendChild(meta);
  }
}
