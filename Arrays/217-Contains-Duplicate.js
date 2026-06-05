/**
 * LeetCode 217 - Contains Duplicate
 *
 * Approach: Set
 *
 * Why Set?
 * - A Set stores only unique values.
 * - Duplicate values are not stored twice.
 * - has() checks if a value exists in O(1) average time.
 * - add() inserts a value in O(1) average time.
 *
 * Algorithm:
 * 1. Create an empty Set.
 * 2. Traverse the array.
 * 3. If the current element already exists in the Set,
 *    a duplicate is found, return true.
 * 4. Otherwise add the element to the Set.
 * 5. If traversal completes, return false.
 *
 * Example:
 * nums = [1,2,3,1]
 *
 * Set = {}
 * 1 -> add => {1}
 * 2 -> add => {1,2}
 * 3 -> add => {1,2,3}
 * 1 -> already exists
 * return true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var containsDuplicate = function (nums){
    let set=new Set();

    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }else{
            set.add(nums[i]);
        }
    }

    return false
}