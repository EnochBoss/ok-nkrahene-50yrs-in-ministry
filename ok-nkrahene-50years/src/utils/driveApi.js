// utils/driveApi.js
export async function fetchDriveImages(folderId) {
  if (!folderId) return [];
  try {
    const url = `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;
    const res = await fetch(url);
    const html = await res.text();

    // crude regex to find file id like "https://lh3.googleusercontent.com/..." or "id":"<id>"
    // we'll capture sequences of 25+ chars (Drive file IDs are long)
    const regex = /"([a-zA-Z0-9_-]{25,})"/g;
    const matches = [...html.matchAll(regex)].map(m => m[1]);

    // dedupe while preserving order
    const unique = [...new Set(matches)];

    // map to thumbnail URLs
    const urls = unique.map(id => `https://drive.google.com/thumbnail?sz=w1000&id=${id}`);
    return urls;
  } catch (err) {
    console.error("fetchDriveImages error", err);
    return [];
  }
}
