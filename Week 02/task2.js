peak = (Numbers,size) => {
    var arr = [];
    if(Numbers[0] > Numbers[1]){
        arr.push(Numbers[0]);
    }
    if(Numbers[size-1] > Numbers[size-2]){
        arr.push(Numbers[size-1]);
    }
    for(var i=0; i<size-1; i++ ){
        if (Numbers[i] > Numbers[i - 1]){
            if(Numbers[i] > Numbers[i + 1]) 
                arr.push(Numbers[i]);
    }
}
    return arr;
}

var Numbers = [10, 10, 40, 30, 60, 70, 80, 40, 90];
var size = Numbers.length;
console.log("Peaks are " + peak(Numbers, size));
