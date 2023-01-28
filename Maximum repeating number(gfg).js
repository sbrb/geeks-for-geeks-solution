//Maximum repeating number(gfg)
// https://t.ly/pnIr

class Solution {
    maxRepeating(arr) {
        let map = new Map()
        for (let i = 0; i < arr.length; i++) {
            let x = arr[i]
            if (map.has(x))
                map.set(x, map.get(x) + 1)
            else map.set(x, 1)
        }
        let max = 0, ans = 0;
        map.forEach((value, key) => {
            if (value > max) {
                max = value
                ans = key
            } else if (max == value) {
                if (key < ans) ans = key;
            }
        })
        return ans;
    }
}