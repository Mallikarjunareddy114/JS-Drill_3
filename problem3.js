// 3. Find which country has more population among all?

const anotherDataSet = require('./dataSet');
function countryWithHighestPopulation(data) {
    if (Array.isArray(data)) {
        let highestPopulationCountry = "";
        let highestPopulation = 0;
        data.forEach(city => {
            if (city.population > highestPopulation) {
                highestPopulation = city.population;
                highestPopulationCountry = city.country;
            }
        });
        return highestPopulationCountry;
    } 
}
// const result = countryWithHighestPopulation(anotherDataSet);
// console.log(result);
module.exports=countryWithHighestPopulation;
