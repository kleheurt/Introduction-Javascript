let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

const avg = array => array.reduce((a,b) => a + b) / array.length;

console.log(avg(array));