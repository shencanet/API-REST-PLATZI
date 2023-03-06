export function findLargestPalindrome(words) {
    // Tu código aquí 👈
    let maxPalindromo;
    let mayMaxPalindromo = 0;
    for (const word of words) {
      let cadReverse = word.split("").reverse().join("");
      if (word === cadReverse) {
        if (word.length > mayMaxPalindromo) {
          mayMaxPalindromo = word.length;
          maxPalindromo = word;
        }
      }
    }
    if (mayMaxPalindromo > 0) {
      return maxPalindromo;
    } else {
      return null;
    }
  }