export const createRandomString = (len) => {
  var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return [...Array(len)].reduce((a) => a + p[~~(Math.random() * p.length)], "");
};
