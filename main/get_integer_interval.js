'use strict';

function get_integer_interval(number_a, number_b) {
    var arr=[];
    if (number_a > number_b){
        var tmp = number_a;
        for (var i =0;i<number_a-number_b+1;i++){
            arr[i] = tmp;
            tmp--;
        }
    }else if (number_a < number_b) {
        var tmp = number_a;
        for (var i =0;i<number_b-number_a+1;i++){
            arr[i] = tmp;
            tmp++;
        }
    }else{
        arr[0] = number_a;
    }
    
    return arr;
}

module.exports = get_integer_interval;