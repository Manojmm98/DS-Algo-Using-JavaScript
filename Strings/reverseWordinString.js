/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // spliting the word with empty space so it will give
    // a array when it find a space 
    let newstr = s.split(' ');
    // create a result array
    let res=[];
    // the split method give us words like 3 2 1 and we have to place it like 1 2 3
    // start the loop from last and go till 0th index and push the element to the array
    for(let i =newstr.length-1;i>=0;i--){
        if(newstr[i]){
           res.push(newstr[i]);
        }
    }
    // lastly join the the element of array with empty spaceafter each word  
    return res.join(' ');
};