import _ from 'lodash';

export default function solution(content) {
  // BEGIN
  const rows = content.split('\n');
  const data = rows.slice(1, rows.length - 1);

  // 1 step
  console.log(`Count: ${data.length}`);

  // 2 step
  const cities = data.map((row) => row.split(',')[7]);
  const uniques = [];
  for (let city of cities) {
    if (!uniques.includes(city)) {
      uniques.push(city);
    }
  }
  console.log(`Cities: ${uniques.sort().join(', ')}`);

  // 3 step
  const humidities = data.map((row) => row.split(',')[3]);
  const minHumidity = humidities.reduce((acc, elem) => {
    if (elem < acc) return elem;
    else return acc;
  });
  const maxHumidity = humidities.reduce((acc, elem) => {
    if (elem > acc) return elem;
    else return acc;
  });

  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`);

  // 4 step
  const collection = data.map((row) => row.split(','));
  const hottestTemp = _.max(collection, (row) => row[1]);
  console.log(`HottestDay: ${hottestTemp[0]} ${hottestTemp[7]}`);

  // 5 step
  const obj = _.groupBy(collection, (row) => row[7]);
  const res = _.map(obj, (rows, city) => {
    const meanTemperature = _.mean(rows.map((el) => Number(el[1])));
    return [meanTemperature, city];
  });
  const hottestCity = _.max(res, (row) => row[0]);
  console.log(`HottestCity: ${hottestCity[1]}`);
  // END
}
