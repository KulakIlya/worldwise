export const getFlagEmoji = countryCode => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

export const getIdFromPathName = path => {
  const pathArr = path.split('/');
  return pathArr.at(-1).length ? pathArr.at(-1) : pathArr.at(-2);
};
