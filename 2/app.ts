let arr = function () {
  let arr: any = [];
  let rand = Math.floor(Math.random() * 100);
  for (let i = 0; i < rand; i++) {
    let result = Math.floor(Math.random() * 100);
    arr.push(result);
  }
  return [arr, Math.floor(Math.random() * 100)];
};
let [nums, target] = arr();

var twoSum = function (nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
};
console.log({ res: twoSum(nums,target) });
