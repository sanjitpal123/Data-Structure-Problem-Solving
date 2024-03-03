/**
 * @param {number[]} nums
 * @param {number} Target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var c=0;
    var j=0;
    var index=["",""];
    for(let i=0;i<nums.length;i++)
    {
        c=nums[i];
        j=i-1;
        while(j>=0)
        {
            if(nums[j]+c==target)
            {
              return   index=[i,j];
              break;
            }
            else
            {
                j--;
            }
        }


    }
};
