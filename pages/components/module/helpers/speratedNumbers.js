const sp = (number, options = {}) => {
  if (number === null || number === undefined) {
    return number; // or return a default value, e.g., "N/A"
  }

  try {
    const formattedNumber = number.toLocaleString(options);
    return formattedNumber;
  } catch (error) {
    throw new Error(`Failed to format number: ${error.message}`);
  }
};

export default sp