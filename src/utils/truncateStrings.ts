function truncateStrings(string: string | undefined, size: number) {
  let truncatedString = string || "";
  if (string && string.length > size) truncatedString = truncatedString.slice(0, size) + "...";
  if (!string) return "";
  return truncatedString;
}
export default truncateStrings;
