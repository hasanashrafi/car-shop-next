const sp = (number, options = {}) => {
  if (typeof number !== 'number') {
    throw new Error('Invalid input: number must be a number type');
  }
  try {
    const formattedNumber = number.toLocaleString(options);
    return formattedNumber;
  } catch (error) {
    throw new Error(`Failed to format number: ${error.message}`);
  }
};

export default sp