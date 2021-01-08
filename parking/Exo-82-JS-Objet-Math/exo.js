console.log(Math.floor(34.589456));
console.log(Math.floor(68.412784));
console.log(Math.ceil(39.456));
console.log(Math.round(5.68));
console.log(Math.round(5.41));
console.log(Math.trunc(6.12457));
console.log(Math.trunc(9.568124));
console.log(valMini(5,1,12,-1,45));
console.log(valMini(9,12,16,44,3));
console.log(valMax(5,1,12,-1,45));
console.log(valMax(9,12,16,44,3));
console.log(Math.abs(-6));
console.log(Math.abs(-56));

function valMini(val1, val2, val3, val4, val5){
    return Math.min(val1,val2,val3,val4,val5);
}

function valMax(val1, val2, val3, val4, val5){
    return Math.max(val1,val2,val3,val4,val5);
}