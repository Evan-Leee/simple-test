function single_element(arr) {
    var result = [];

    result = arr.filter(function(item,i){
        if((i+1)%2 === 0){
            return item;
        }
    });

    for(var i = 0; i < result.length; i++)


    return result;
}
