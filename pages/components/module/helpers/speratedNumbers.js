const sp = (number) => {
    const separatedNumber = number
      .toString()
      .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const joinedNumber = separatedNumber.join(",");
    return joinedNumber;
  };

  export {sp}