let nums = [10, 15, 22, 33, 40, 55, 60];
let evenCount = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenCount++;
  }
}

console.log("Total even numbers:", evenCount);
