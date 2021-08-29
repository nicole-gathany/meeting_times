Merge Intervals 
// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

https://leetcode.com/problems/meeting-rooms/

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: true

//nested arrays
//return boolean (true or false)

//[[1, 10], [10, 11]]
//

let meetingTimes = function(arr) {
  //let arr2 = arr.slice(0).sort((a, b) => a[0] - b[0])
   
   arr.sort((a,b) => (a[0] - b[0]));

   for(let i=0; i<arr.length-1; i++){
     if(arr[i][1] > arr[i+1][0]) return false;
   }

   return true;
  
}

console.log(meetingTimes([[0,30],[5,10],[15,20]])); //should return false
console.log(meetingTimes([[7,10],[2,4]]));
//[2, 4], [7,10] true
console.log(meetingTimes([[1, 10], [10, 11]]))
//true

//sort the arrays by the first element in each array
//loop through the array
//if the end array for any array is more then the start for arrays after it, then return false
//when loop ends return true