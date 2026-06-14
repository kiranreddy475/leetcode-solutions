/**
 * Top K Frequent Elements
 *
 * Approach:
 * 1. Use a HashMap (Map) to count the frequency of each number.
 *    Example:
 *      [1,1,1,2,2,3]
 *      =>
 *      1 -> 3
 *      2 -> 2
 *      3 -> 1
 *
 * 2. Convert the Map into an array using the spread operator (...).
 *    Example:
 *      Map { 1 => 3, 2 => 2, 3 => 1 }
 *      =>
 *      [[1,3], [2,2], [3,1]]
 *
 * 3. Sort the array in descending order based on frequency.
 *    sort((a,b) => b[1] - a[1])
 *
 * 4. Take the first k elements from the sorted array.
 *
 * 5. Push only the number (index 0) into the result array.
 *    Ignore the frequency (index 1).
 *
 * Methods / Concepts Used:
 * - Map (HashMap) for frequency counting
 * - Spread operator (...) to convert Map into an array
 * - Array.sort() with custom comparator
 * - Array.push() to build the result
 *
 * Time Complexity:
 * - Frequency counting: O(n)
 * - Sorting: O(m log m)
 *   where m = number of unique elements
 *
 * Overall:
 * - O(n + m log m)
 *
 * Future Optimization:
 * - Learn and implement Bucket Sort approach
 * - Bucket Sort can reduce the complexity to O(n)
 * - Current solution is simpler and easier to understand
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            let count=map.get(nums[i]);
            map.set(nums[i],count+1)
        }else{
            map.set(nums[i],1)
        }
    }
    let arr=[...map]
    arr.sort((a,b)=>b[1]-a[1])

    let result=[]
    for(let i=0;i<k;i++){
       result.push(arr[i][0]);
    }
    return result
};