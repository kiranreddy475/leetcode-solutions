/**
 * LeetCode 349 - Intersection of Two Arrays
 *
 * Pattern:
 * HashSet
 *
 * Approach:
 * 1. Convert both arrays into Sets to remove duplicates.
 * 2. Iterate through the first Set.
 * 3. Check if each element exists in the second Set.
 * 4. If yes, add it to the result.
 *
 * Example:
 * nums1 = [1,2,2,1]
 * nums2 = [2,2]
 *
 * Set1 = {1,2}
 * Set2 = {2}
 *
 * 1 -> not present
 * 2 -> present
 *
 * Result = [2]
 *
 * Set Rules:
 * - Stores only unique values.
 * - has() -> O(1) average time.
 * - add() -> O(1) average time.
 * - Duplicate values are automatically ignored.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 */
var intersection = function(nums1, nums2) {
    let firstset =new Set(nums1); //set storing only unique values
    let secondset =new Set(nums2);

    let results=[];
     
    for(value of firstset){
        if(secondset.has(value)){
            results.push(value)
        }
    }
    return false;
};