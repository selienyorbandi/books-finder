function truncateStrings(string: string | undefined, size: number) {
  let truncatedString = string || "";
  if (string && string.length > size) truncatedString = truncatedString.slice(0, size) + "...";
  return truncatedString;
}
export default truncateStrings;
