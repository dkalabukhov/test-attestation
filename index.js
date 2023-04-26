import _ from 'lodash';

export default function solution(content) {
  // BEGIN
  const rows = content.split('\n');
  const data = rows.slice(1, rows.length - 1);
  console.log(`Count: ${data.length}`);

  const cities = data.map((row) => row.split(',')[7]);
  const uniques = [];
  for (let city of cities) {
    if (!uniques.includes(city)) {
      uniques.push(city);
    }
  }
  console.log(`Cities: ${uniques.sort().join(', ')}`);

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

  // END
}
