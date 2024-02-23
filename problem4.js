 // 4. Store all attractions in an array

const anotherDataSet = require('./dataSet');
function getAllAttractions(data) {
    if (Array.isArray(data)) {
        return data.map(city => city.attractions).flat();
    }
}
// const result = getAllAttractions(anotherDataSet);
// console.log(result);
module.exports=getAllAttractions;