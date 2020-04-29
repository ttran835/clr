const helper = {
  /**
   * @param {String} address
   * @return {String} modified address str for Google map
   */
  modifyAddressForQuery: (address) => {
    const encoding = {
      ' ': '+',
      ',': '%2C',
      '"': '%22',
      '<': '%3C',
      '>': '%3E',
      '#': '%23',
      '%': '%25',
      '|': '%7C',
    };

    return address.split('').reduce((str, char) => {
      if (encoding[char]) {
        char = encoding[char];
      }
      str += char;
      return str;
    }, '');
  },
};

export default helper;
