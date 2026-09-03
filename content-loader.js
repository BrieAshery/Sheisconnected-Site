// Sheisconnected Initiative — content loader
// Fetches this page's JSON content file and populates the page.
// Editing happens through /admin (Decap CMS), which edits these same
// JSON files in the content/ folder — this script is what makes those
// edits actually show up on the live pages.

async function loadContent(jsonPath) {
  try {
    const res = await fetch(jsonPath + "?v=" + Date.now()); // cache-bust so edits show immediately
    if (!res.ok) throw new Error("Could not load " + jsonPath);
    return await res.json();
  } catch (err) {
    console.warn("Content load failed, page will show fallback text:", err);
    return null;
  }
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined && value !== null) el.textContent = value;
}
