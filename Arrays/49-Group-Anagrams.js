/**
 * Group Anagrams
 *
 * Idea:
 * - Anagrams contain the same characters in a different order.
 * - If we sort the characters of each word, all anagrams produce the same string.
 *   Example:
 *      "eat" -> "aet"
 *      "tea" -> "aet"
 *      "ate" -> "aet"
 *
 * Flow:
 * 1. Create a Map.
 * 2. Use the sorted word as the key.
 * 3. Store all matching words in an array as the value.
 * 4. If the key already exists, push the word into the existing array.
 * 5. Otherwise create a new array with the current word.
 * 6. Return all values from the Map.
 *
 * Note:
 * split('') -> converts string into character array
 *      "eat" => ["e","a","t"]
 *
 * sort() -> sorts the array alphabetically
 *      ["e","a","t"] => ["a","e","t"]
 *
 * join('') -> converts array back into a string
 *      ["a","e","t"] => "aet"
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {

        // Convert string -> array -> sort -> string
        // Used as a common key for all anagrams
        let sorted = strs[i].split("").sort().join("");

        if (map.has(sorted)) {

            // Key already exists, add current word to that group
            let found = map.get(sorted);
            found.push(strs[i]);

        } else {

            // First occurrence of this anagram group
            // Value must be an array because more words may be added later
            map.set(sorted, [strs[i]]);
        }
    }

    let groupedarray = [];

    // Collect all grouped anagram arrays
    for (let value of map.values()) {
        groupedarray.push(value);
    }

    return groupedarray;
};