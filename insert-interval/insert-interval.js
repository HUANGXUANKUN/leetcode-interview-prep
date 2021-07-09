/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = []
    
    // insert all interval.end < newInterval.start
    let i = 0;
    while (i < intervals.length && newInterval[0] > intervals[i][1]){
        result.push([intervals[i][0], intervals[i][1]]);
        i++;
    }
    
    // init interval = newInteral
    let oldStart = newInterval[0];
    let oldEnd = newInterval[1];
        
    // iterate remaining intervals with merging
    while (i < intervals.length){
        const newStart = intervals[i][0]
        const newEnd = intervals[i][1]
        // if intersect, merge
        // old    ----       ----      ------------     ------
        // new -----            -----    --------     -----------
        if (oldStart >= newStart || newStart <= oldEnd ){
            //merge
            oldStart = Math.min(oldStart, newStart)
            oldEnd = Math.max(oldEnd, newEnd);
        }
        // if not intersect, push old into result
        else{
            result.push([oldStart, oldEnd])
            oldStart = newStart;
            oldEnd = newEnd;
        }
        i++;
    }
        
    
    // push last interval to result
    result.push([oldStart, oldEnd])
    
    return result;
    
};