//151. Reverse Words in a String / you go to leetcode and search this question and solve it
/**
 * @param {string} 
 * @return {string}
 */
var reverseWords = function(s) {
    let sp = s.trim().split(' ');

   let start = 0;
   let end = sp.length - 1;

   while (start < end) {
       let temp = sp[start];
       sp[start] = sp[end];
       sp[end] = temp;
       start++;
       end--;
   }
   let final=[];
   for(let i=0;i<sp.length;i++)
   {
       if(sp[i]!=='')
       {
        final.push(sp[i]);
       }
   }
   return final.join(' ');
};
