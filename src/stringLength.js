function stringLength(string) {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  } else if (string.length >= 10) {
    throw new Error('String must be less than 10 characters');
  } else {
    throw new Error('String must be at least 1 character');
  }
}

module.exports = stringLength;