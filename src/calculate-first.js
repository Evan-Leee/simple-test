function single_element(arr) {

    return arr.filter(function (item, i) {
            return (i + 1) % 2 === 0;
    }).filter(function(elem, i, array){
        return array.indexOf(elem) === array.lastIndexOf(elem);
    });
}
