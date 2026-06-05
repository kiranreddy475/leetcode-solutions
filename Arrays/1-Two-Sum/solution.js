/**
 * 1. Two Sum
 * Brute Force
 *
 * ====================================
 * Approach 1: Brute Force
 * ====================================
 *
 * Check every pair of numbers.
 *
 * Example:
 * nums = [2,7,11,15]
 * target = 9
 *
 * 2 + 7 = 9
 * return [0,1]
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */

function twosumBruteforce(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(target = nums[i]+nums[j]){
                return [i,j]
            }
        }
    }
}

/**
 * ====================================
 * Approach 2: Hash Map (Optimal)
 * ====================================
 *
 * Store previously seen numbers in a map.
 *
 * Example:
 * nums = [2,7,11,15]
 * target = 9
 *
 * i = 0
 * num = 2
 * complement = 7
 * map = {2:0}
 *
 * i = 1
 * num = 7
 * complement = 2
 * map contains 2
 *
 * return [0,1]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twosumHashmap(nums,target){
    const map=new Map();

    for(let i=0;i<nums.length;i++){
        const needed=target-nums[i];

        if(map.has(needed)){
            return [map.get(needed),i]
        }
            map.set(nums[i],i)
        
    }
}


/* Test Cases */

console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSumHashMap([2, 7, 11, 15], 9));    // [0,1]