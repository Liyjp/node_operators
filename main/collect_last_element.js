'use strict';

function collect_last_element(collection) {
    var ele = collection[collection.length-1];
    return ele;
}

module.exports = collect_last_element;