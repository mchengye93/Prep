/* [1,-3,2,1,-1]
Given an array find maxium continous subarray
*/

function maxSubarray (array) {

    let maxSum = array[0];
    let startIndex = 0;
    let endIndex = 0;
    for (let i = 0; i < array.length; i++) {
        let currentSum = array[i];

        if(currentSum > maxSum) {
            maxSum = currentSum;
            startIndex = i;
            endIndex = i;
        }
        for (let x= i + 1 ; x < array.length; x++) {
            currentSum += array[x];

            if (currentSum > maxSum) {
                maxSum = currentSum;
                endIndex = x;
            }
        }
    }
    console.log(startIndex, endIndex);
    return maxSum;
}