export const getReadingTime = (text) => {
  const wordsPerMinute = 300;
  const words = text.split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  const readTimeInMinutes = Math.ceil(minutes);

  return readTimeInMinutes;
};

export const getShortTitle = (text, length = 60) => {
  if (text?.length < length) {
    return text;
  }

  return `${text?.slice(0, length)}...`.replace(' ...', '...');
};
