const getRandFromRange = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const stringIsLimited = (string, length) => {
  const res = string.length <= length;
  return res;
};

const checkPhotoFormat = (path) => {
  const imgPath = /.jpg|.jpeg|.png$/;
  return imgPath.test(path);
};

const isEscapeKey = (evt) => evt.key === 'Escape';


export {getRandFromRange, stringIsLimited, checkPhotoFormat, isEscapeKey};
