//Search for a word in a text and find out how many times it occurs

export const getCoincidences = (text, word) => {
  if (text.length === 0 || word.length === 0) return;
  if (typeof text !== "string" || typeof word !== "string") return;

  let count = 0;
  let filteredText = text
    .trim()
    .toLowerCase()
    .replace(/[!.,-]/gi, "")
    .split(" ");

  //   let map = {};
  for (const wordOfText of filteredText) {
    if (wordOfText === word) count++;
    // if (map[wordOfText]) map[wordOfText]++;
    // else map[wordOfText] = 1;
  }

  return count;
  //   return map[word];
};
