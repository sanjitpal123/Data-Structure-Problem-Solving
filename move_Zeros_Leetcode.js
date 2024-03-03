// Q.283. Move Zeroes , you can go to leetcode and get this question 


/**
 * @param {number[]} 
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start=0;
     for(let i=0;i<nums.length;i++)
     {
         if(nums[i]!==0 && nums[start]==0)
         {
             let temp=nums[i];
             nums[i]=nums[start];
             nums[start]=temp;
             start++;
         }
         else if(nums[start]!=0)
         {
             start++;
         }
     }
  
  
    }
   
