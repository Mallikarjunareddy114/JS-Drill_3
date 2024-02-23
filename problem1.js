 // 1. Store all country names in array.

 const anotherDataSet = require('./dataSet');

 function getAllCountryNames(data) {
    if(Array.isArray(data)){
    return data.map((element) => element.country);
    }
}
// let result=getAllCountryNames(anotherDataSet);
// console.log(result);
module.exports=getAllCountryNames;