export function dateFormatter(timestamp) {
  if (!timestamp) return null;
  const date = new Date(timestamp * 1000);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);

  return formattedDate;
}
