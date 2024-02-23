// 5. Console log the city names that has Bus transport facility.

const anotherDataSet = require("./dataSet");
function getCitiesWithBusTransport(data) {
    if (Array.isArray(data)) {
        return data.filter(element => element.publicTransport.includes('Bus'))
            .map(element => element.city);
    }
}
// let result = getCitiesWithBusTransport(anotherDataSet);
// console.log(result);
module.exports=getCitiesWithBusTransport;