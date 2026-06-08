export function saveHistory(history) {
  localStorage.setItem("history", JSON.stringify(history));
}

export function loadHistory() {
  const data = localStorage.getItem("history");

  if (!data) return [];

  return JSON.parse(data);
}
