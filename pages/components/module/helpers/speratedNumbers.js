const formatNumber = (number, options = {}) => {
  const formattedNumber = number.toLocaleString(options);
  return formattedNumber;
};

export default formatNumber