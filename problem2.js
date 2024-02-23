// 2. Find the average population among all countries.

const anotherDataSet = require('./dataSet');
function averagePopulation(data) {
    if (Array.isArray(data) && data.length > 0) {
        const totalPopulation = data.reduce((acc, city) => acc + city.population, 0);
        return totalPopulation / data.length;
    }
}
// const result= averagePopulation(anotherDataSet);
// console.log(result);
module.exports=averagePopulation;
