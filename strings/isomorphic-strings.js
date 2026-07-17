
//  205. Isomorphic Strings
//   Difficulty: Easy
//  Approach: Two Hash Maps
//  Time Complexity: O(n)
//  Space Complexity: O(n)
 

var isIsomorphic = function(s, t) {
    let sToT = {};
    let tToS = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (sToT[charS] && sToT[charS] !== charT) {
            return false;
        }

        if (tToS[charT] && tToS[charT] !== charS) {
            return false;
        }

        sToT[charS] = charT;
        tToS[charT] = charS;
    }

    return true;
};
