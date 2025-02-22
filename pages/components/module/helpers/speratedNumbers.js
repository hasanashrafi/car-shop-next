const sp = (number, options = {}) => {
  
  try {
    const formattedNumber = number.toLocaleString(options);
    return formattedNumber;
  } catch (error) {
    throw new Error(`Failed to format number: ${error.message}`);
  }
};

export default sp