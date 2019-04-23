'use strict';

function get_integer_interval_2(number_a, number_b) {
    var arr = [];
    if (number_a > number_b){

            for (var j =number_a; j>=number_b;j--){
                if (j % 2 === 0){
                    arr.push(j);
                }
            }

    }else if (number_a < number_b){

            for (var j =number_a; j<=number_b;j++){
                if (j % 2 === 0){
                    arr.push(j);
                }
            }

    } else {
        if (number_b % 2 === 0){
            arr.push(number_b);
        } else {
            arr = [];
        }
    }
    return arr;
}

module.exports = get_integer_interval_2;