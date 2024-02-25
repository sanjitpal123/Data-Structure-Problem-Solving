//977. Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i;
    let j;
    let square=[];
    for(i=0;i<nums.length;i++)
    {
        square.push(nums[i]**2);
    }
    let k,g;
    for(k=0;k<square.length;k++)
    {
        for(g=0;g<square.length;g++)
        {
            if(square[g]>square[g+1])
            {
                let temp=square[g];
                square[g]=square[g+1];
                square[g+1]=temp;
            }
        }
    }
    return square;
        
    };