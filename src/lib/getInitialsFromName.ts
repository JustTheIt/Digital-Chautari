export function getInitialsFromName(name: string): string {
  const cleaned = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  if (parts.length === 1) {
    const word = parts[0];
    return word.length >= 2 ? word.slice(0, 2).toUpperCase() : word.toUpperCase();
  }

  return "";
}
