function calculate_median(arr) {
    var temp = [];

    temp = arr.filter(function (item, i) {
        return (i + 1) % 2 === 0;
    });

    var index;
    if (temp.length % 2 === 0) {
        index = temp.length / 2 - 1;
        return parseInt((temp[index] + temp[index + 1]) / 2);
    } else {
        index = Math.floor(temp.length / 2);
        return temp[index];
    }
}
