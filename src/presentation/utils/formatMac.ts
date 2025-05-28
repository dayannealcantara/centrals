export function formatMac(input: string): string {
  const cleaned = input
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase()
    .slice(0, 12);
  return cleaned.match(/.{1,2}/g)?.join(":") ?? "";
}
