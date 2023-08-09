obj = {
  a: 1,
  b: {
    c: {
      d: 2,
    },
  },
};

//最简版
const myObj = JSON.parse(JSON.stringify(obj));
console.log(myObj);

// 面试简版
function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) return;

  let newObj = {};

  if (obj instanceof Array) {
    newObj = [];
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }

  return newObj;
}
