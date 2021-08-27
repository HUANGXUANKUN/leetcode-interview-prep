/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // find the insertion index where newInterval.start > oldIntervals.end
    const newStart = newInterval[0];
    const newEnd = newInterval[1];
    let insertIdx = 0;
    const res = [];
    for (let i = 0; i < intervals.length; i++){
        const oldStart = intervals[i][0];
        const oldEnd = intervals[i][1];
        insertIdx = i;
        if (newStart <= oldEnd){
            // insert from i + 1
            break;
        }else{
            // newStart >= oldEnd
            res.push([oldStart, oldEnd]);
            if (i == intervals.length - 1){
                insertIdx = i+1; // insert at last
            }
        }
    }
    if (insertIdx == intervals.length){
        res.push([newStart, newEnd]);
        return res;
    }
    // console.log(res)
    // console.log(insertIdx)
    let currStart = newStart;
    let currEnd = newEnd;
    let i = insertIdx;
    while (i < intervals.length){
        const oldStart = intervals[i][0];
        const oldEnd = intervals[i][1];
        // check if merge
        if(!(oldStart > currEnd)){
            // console.log("merge at i = ", i)
            // console.log([currStart, currEnd, oldStart, oldEnd])
            // merge
            currStart = Math.min(currStart, oldStart);
            currEnd = Math.max(currEnd, oldEnd);
        }else{
            // split, currStart > oldEnd
            // console.log("pushing ", [currStart, currEnd])
            res.push([currStart, currEnd]);
            currStart = oldStart;
            currEnd = oldEnd;
        }
        i++;
    }
    // push last group
    res.push([currStart, currEnd]);
    return res;
};