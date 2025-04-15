/**
 *  * @param {string} s
  * @return {string}
   */
var longestPalindrome = function (s) {
    let max = 0;
    let start, end = 0;
    // create a palindrome fun to check if the 2 char are equal or not
    function isPalindrome(s, i, j) {
        // check till we reach the middle part of string
        while (i < j) {
            let ch1 = s[i];
            let ch2 = s[j];
            // if chr are not equal
            if (ch1 !== ch2) {
                return false;
            }
            // increase the start index and decrease the end index
            i++;
            j--;
        }
        return true;
    }

    // traverse through the string and check palindrom substring
    let n = s.length;
    // we will start the i from 0 index and j from 1 index and will pass the i and j value to check for the substrings and go from start to end
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (isPalindrome(s, i, j)) {
                // if it is palindrome then check for max value
                // and update our start and end index
                if (j - i + 1 > max) {
                    max = Math.max(max, j - i);
                    start = i;
                    end = j;
                }
            }
        }
    }
    // return the substring from start to end element but from 0 based indexing the substring will give till index-1 so we take end+1
    return s.substring(start, end + 1);

};
 