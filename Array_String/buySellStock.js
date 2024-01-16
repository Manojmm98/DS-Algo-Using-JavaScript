/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // find out the min value of the array

    let minVal = prices[0];   
    let maxProfit =0;
    for(let i=0;i<prices.length;i++){
        // check if there is any minum present in the array
        if(prices[i]<minVal){
          minVal = prices[i];
        }
        // after finding the min value check whether we are getting highest profit by        subsctracting every value with min value if we found greater value then update it that is our profit
        else if((prices[i]-minVal)> maxProfit){
            maxProfit = prices[i]-minVal;
        }
    }

 return maxProfit;
  
    
};