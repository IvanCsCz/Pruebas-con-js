export const isPalindrome = (word) => {
  const invertedWord = word.split("").reverse().join("");
  return invertedWord === word;
};
