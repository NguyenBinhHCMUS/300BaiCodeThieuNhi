/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashMap[target - num] !== undefined) {
      return [i, hashMap[target - num]];
    }
    hashMap[num] = i;
  }
};

// O(n2): 2 vòng lặp
// hashMap: truy xuất nhanh thông qua key, hashMap{key: value, key1: value1,...}
