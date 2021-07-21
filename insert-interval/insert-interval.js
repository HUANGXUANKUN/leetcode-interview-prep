/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    // push intervals[i] where end < newInterval.start
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]){
        result.push(intervals[i]);
        i++;
    }
    
    // intervals[i].end >= old.start
    // merge remaining intervals
    let oldStart = newInterval[0],
        oldEnd = newInterval[1];
    
    // 
    for (; i < intervals.length; i++){
        const newStart = intervals[i][0],
              newEnd = intervals[i][1];
        
        // check if merge
        if (oldEnd < newStart){
            // not merge
            result.push([oldStart, oldEnd]);
            oldStart = newStart;
            oldEnd = newEnd;
        }else{
            // merge
            oldStart = Math.min(oldStart, newStart);
            oldEnd = Math.max(oldEnd, newEnd);
        }
    }
    result.push([oldStart, oldEnd]);
    return result;
};