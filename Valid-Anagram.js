//242. Valid Anagram // you can find it on leetcode
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mp={};
    for(let i=0;i<s.length;i++)
    {
        if(mp[s[i]])
        {
            mp[s[i]]++;
        }
        else
        {
            mp[s[i]]=1;
        }
    }
    for(let j=0;j<t.length;j++)
    {
        if(mp[t[j]]===undefined)
        {
            return false;
        }
        else
        {
            mp[t[j]]--;
            if(mp[t[j]]==0)
            {
                delete mp[t[j]];
            }
        }
    }
    return Object.keys(mp).length==0;
 };