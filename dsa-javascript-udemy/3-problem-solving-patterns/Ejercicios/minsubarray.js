// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
// whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4, 3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5, 4] is the smallest subarray
// minSubArrayLen([3, 1, 62, 19], 52); // 1 -> because [62] is greater than 52

function minSubArrayLen(nums, target) {
    //crear punteros
    let l = 0;
    let r = 0;
    //crear variable para guardar longitud y valores
    let size = Infinity;
    let total = nums[0];

    while (r < nums.length) {

    }
}