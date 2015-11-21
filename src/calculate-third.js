function even_group_calculate_average(arr) {
    var result = [];
    var temp = [];

    temp = arr.filter(function (item, i) {
        return (i + 1) % 2 === 0;
    });

    temp = temp.filter(function (item) {
        return item % 2 === 0;
    });

    if (temp.length) {
        result = average(temp);
    } else {
        result.push(0);
    }

    return result;
}


function average(temp) {
    var result = [];
    var averages = [];

    averages[0] = temp.filter(function(item){
        return item >= 1 && item < 10;
    });

    averages[1] = temp.filter(function(item){
       return item >= 10 && item < 100;
    });

    averages[2] = temp.filter(function(item){
       return item >= 100 && item < 1000;
    });

    averages.forEach(function(average){
        var avg;
        if(average.length){
            avg = average.reduce(function(a,b){return a + b;}) / average.length;
            result.push(avg);
        }
    });

    return result;
}