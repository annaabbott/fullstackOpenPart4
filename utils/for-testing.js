const reverse = (String) => {
  return String.split("").reverse().join("");
};

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item;
  };
  return array.length === 0 ? NaN : array.reduce(reducer) / array.length;
};

export { reverse, average };
