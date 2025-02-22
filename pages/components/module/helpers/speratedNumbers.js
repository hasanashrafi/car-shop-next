const formatNumber = (number, options = {}) => {
  const formattedNumber = number.toString(options);
  return formattedNumber;
};

export default formatNumber