function arrayOfStringsToString(array: string[] | undefined) {
  if (!array) return "";
  return array.join();
}

export default arrayOfStringsToString;
