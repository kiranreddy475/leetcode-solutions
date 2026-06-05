/**
 * LeetCode 242 - Valid Anagram
 *
 * Pattern:
 * HashMap Frequency Counting
 *
 * Approach:
 * 1. If lengths are different, return false.
 * 2. Count frequency of each character in s.
 * 3. Traverse t and decrease the frequency.
 * 4. If any character doesn't exist, return false.
 * 5. At the end, all frequencies should be 0.
 *
 * Example:
 * s = "anagram"
 * t = "nagaram"
 *
 * Frequency Map after s:
 * a -> 3
 * n -> 1
 * g -> 1
 * r -> 1
 * m -> 1
 *
 * After processing t:
 * all counts become 0
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var isAnagram = function(s, t) {    
    if(s.length != t.length){
        return false;
    } 

    let map=new Map();

    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            let count=map.get(s[i]);
            map.set(s[i],count+1)
        }else{
            map.set(s[i],1)
        }
    }

    for(let j=0;j<t.length;j++){
        if(!map.has(t[j])){
            return false;
        }
        let counter=map.get(t[j])
            map.set(t[j],counter-1)
    }

    for(let value of map.values()){
        if(values !=0){
            return false;
        }
    }
    return true;
};