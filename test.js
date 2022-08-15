/*
 * @Description: 
 * @Author: wangchao
 * @Date: 2022-08-15 16:47:21
 */
var firstMissingPositive = function (nums) {
  let minVal = nums[0]
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item <= 0) {
      continue
    }
    obj[item] = true
    if (minVal >= item) {
      if (!obj[item + 1]) {
        minVal = item + 1
      }
    }
    console.log(minVal);
  }
  if (!obj[1]) {
    return 1
  }
  return minVal
};
let nums = [1, 2, 6, 3, 5, 4]

console.log(firstMissingPositive(nums));