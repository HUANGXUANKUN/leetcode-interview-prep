/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // original interval is not overlapping
    
    // find all intervals with end < newInterval.start
    const result = [];
    let i = 0;
    while(i < intervals.length && intervals[i][1] < newInterval[0]){
        // cannot merge
        console.log("pushing")
        result.push(intervals[i]);
        i++;
    }
    console.log(result);
    let oldStart = newInterval[0];
    let oldEnd = newInterval[1];
    // merge 
    for (let j = i; j < intervals.length; j++){
        const newStart = intervals[j][0],
              newEnd = intervals[j][1];
        if (!(newStart > oldEnd)){
            // merge
            console.log(",merge")
            oldStart = Math.min(oldStart, newStart);
            oldEnd = Math.max(oldEnd, newEnd);
        }else{
            // not overlap
            result.push([oldStart, oldEnd])
            oldStart = newStart;
            oldEnd = newEnd;
        }
    }
    result.push([oldStart, oldEnd]) // push the last
    return result;
};