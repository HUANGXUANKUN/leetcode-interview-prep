/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i = 0;
    let newStart = newInterval[0];
    let newEnd = newInterval[1];
    const res = [];
    while (i < intervals.length){
        const end = intervals[i][1];
        if (newStart <= end){
            // break
            break;
        }else{
            res.push(intervals[i]);
        }
        i++;
    }
    // insert from i 
    while(i < intervals.length){
        const oldStart = intervals[i][0];
        const oldEnd = intervals[i][1];
        // if cannot merge
        //    ----
        // ----    ----  -----
        if (oldStart > newEnd){
            res.push([newStart, newEnd]);
            // update
            newStart = oldStart;
            newEnd = oldEnd;
        }else{
            // else merge
            newStart = Math.min(newStart, oldStart);
            newEnd = Math.max(newEnd, oldEnd);
        }
        i++;
    }
    // push the final newStart, newEnd
    res.push([newStart,newEnd]);
    return res;
    
    
};