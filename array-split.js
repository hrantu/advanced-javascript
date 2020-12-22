const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

const removed = nums.splice(2,5, 77,88,999);

console.log(removed);
console.log(nums);

const together = nums.join("chicken ");
console.log(together);