//66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1; 
    const result = [];
  
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        console.log("sum",sum);
        carry = Math.floor(sum / 10);
        console.log("carry",carry);
        result.unshift(sum % 10);
    }
  
  
    if (carry > 0) {
        result.unshift(carry);
    }
  
    return result;
  };