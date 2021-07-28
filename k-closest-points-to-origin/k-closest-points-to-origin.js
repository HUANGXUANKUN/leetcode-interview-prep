/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // find dist
    const dists = [];
    const distMap = new Map();
    for (let i = 0; i< points.length; i++){
        const x = points[i][0];
        const y = points[i][1];
        const dist = x**2 + y**2;
        dists.push([dist, [...points[i]]]);
    }
    // console.log(dists)
    
    // O(N) quick select 
    quickSelect(dists, 0, dists.length -1, k);
    const result = dists.slice(0, k).map(pair=>{return pair[1]})
    return result;
};

const quickSelect = (dists, start, end, k) => {
    if (start == end) return;
    // find a randomIndex btw [start ,end]
    const randomIndex = Math.floor(Math.random(end-start+1)) + start;
    // console.log([start,end])
    // const randomIndex = end;
    const pivot = partition(dists, start, end, randomIndex);
    // console.log("new pivot = " + pivot)
    // console.log(dists)
    if (pivot == k-1){
        return;
    }else if (pivot < k-1){
        quickSelect(dists, pivot+1, end, k);
    }else{
        // pivot > k-1
        quickSelect(dists, start, pivot-1, k);
    }
}

const partition = (dists, start, end, randomIndex) => {
    const pivotValue = dists[randomIndex][0];
    // swap pivotValue to the last
    [dists[randomIndex], dists[end]] = [dists[end],dists[randomIndex]];
    
    let placeIndex = start;
    for (let i = start; i < end; i++){
        // if smaller, swap
        // if larger donothing
        if (dists[i][0] <= pivotValue){
            // console.log("at i = " + i + " swapped");
            [dists[placeIndex], dists[i]] = [dists[i], dists[placeIndex]];
            placeIndex++;
        }
    };
    // swap back
    [dists[placeIndex], dists[end]] = [dists[end],dists[placeIndex]];
    return placeIndex;
}