function single_element(arr) {
    var temp = [];
    var result = [];

    temp = arr.filter(function (item, i) {
            return (i + 1) % 2 === 0;
    });

    while (temp.length) {

        var current = temp[0];
        temp.splice(0, 1);
        var index = temp.indexOf(current);

        if (index === -1) {
            result.push(current);
        } else {

            temp = temp.filter(function(elem){
                return elem !== current;
            });
        }
    }

    return result;
}
