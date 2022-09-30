/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const cleaned = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const midIndex = cleaned.length / 2;
  const left = cleaned.substring(0, midIndex);
  const right = cleaned
    .substring(cleaned.length % 2 === 0 ? midIndex : midIndex + 1)
    .split("")
    .reverse()
    .join("");
  return left === right;
};

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
