//防抖
const debounce = (fn, time) => {
  let timer = 0;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, ...arguments);
    }, time);
  };
};

//节流
const throttle = (fn, time) => {
  let timer;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
};
