'use strict';

function get_intersection(collection_a, collection_b) {
    var arr= [];
    for (var i =0 ;i<collection_b.length;i++){
        var tmp = collection_b[i];
        for (var j =0 ;j<collection_a.length;j++){
            if (tmp === collection_a[j]){
                arr.push(tmp);
                break;
            }
        } 
    }
    return arr;
}

module.exports = get_intersection;