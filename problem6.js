// 6. Write a function that should take foodItem as a param and return which city has that foodItem in their famousFood list
 const anotherDataSet=require('./dataSet');
function findCitiesWithFoodItem(data) {
    if (Array.isArray(data)) {
        return data.reduce((cities, city) => {
            if (city.famousFood.includes("param")) {
                cities.push(city.city);
            }
            return cities;
        }, []);
    }
    return [];
}
// const result = findCitiesWithFoodItem(anotherDataSet);
// console.log(result);
module.exports=findCitiesWithFoodItem;
