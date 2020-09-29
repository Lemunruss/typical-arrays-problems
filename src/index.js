
exports.min = function min (array) {
  if (arguments.length === 0 || !array.length) {
    return 0;
  } else {
    let num = array[0];
    array.forEach(item => {
      if (item < num) {
        num = item;
      }
    })
    return num;
  }
}

exports.max = function max (array) {
  if (arguments.length === 0 || !array.length) {
    return 0;
  } else {
    let num = array[0];
    array.forEach(item => {
      if (item > num) {
        num = item;
      }
    })
    return num;
  }
}
exports.avg = function avg (array) {
  if (arguments.length === 0 || !array.length) {
    return 0;
  } else {
    let sum = 0;
    array.forEach(item => {
      sum += item;
    })      
    return sum/array.length;
  }
}
