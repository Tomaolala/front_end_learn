(function (w) {
  const PENDING = 'pending';
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';
  class Promise {
      constructor(executor) {
          const that = this;
          that.status = PENDING;
          that.data = undefined;
          that.callbacks = [];
          function resolve(value) {
              if (that.status !== PENDING) return;
              that.status = FULFILLED;
              that.data = value;
              if (that.callbacks.length > 0) {
                  queueMicrotask(() => {
                      that.callbacks.forEach(cb => cb.onResolve(that.data));
                  });
              }
          }
          function reject(reason) {
              if (that.status !== PENDING) return;
              that.status = REJECTED;
              that.data = reason;
              if (that.callbacks.length > 0) {
                  queueMicrotask(() => {
                      that.callbacks.forEach(cb => cb.onReject(that.data));
                  });
              }
          }
          executor(resolve, reject);
      };
      then(onResolve, onReject) {
          const that = this;
          onResolve = typeof onResolve === 'function' ? onResolve : value => value;
          onReject = typeof onReject === 'function' ? onReject : reason => { throw reason };
          return new Promise((resolve, reject) => {
              function handle(callback) {
                  try {
                      const res = callback(that.data);
                      if (res instanceof Promise) {
                          res.then(resolve, reject);
                      } else {
                          resolve(res);
                      }
                  } catch (error) {
                      reject(error);
                  }
              }
              if (that.status === PENDING) {
                  that.callbacks.push(
                      {
                          onResolve(value) {
                              handle(onResolve);
                          },
                          onReject(reason) {
                              handle(onReject);
                          }
                      }
                  )
              } else if (that.status === FULFILLED) {
                    (() => {
                      handle(onResolve);
                  })
              } else {
                  queueMicrotask(() => {
                      handle(onReject);
                  })
              };
          });
      };
      catch(onReject) {
          return this.then(undefined, onReject);
      };
      static resolve(value) {
          return new Promise((resolve, reject) => {
              if (value instanceof Promise) {
                  value.then(resolve, reject);
              } else if (value instanceof Error) {
                  reject(value.message);
              } else {
                  resolve(value);
              }
          })
      };
      static reject(reason) {
          return new Promise((resolve, reject) => {
              if (reason instanceof Error) {
                  reject(reason.message);
              } else if (reason instanceof Promise) {
                  reject(reason.data);
              } else {
                  reject(reason);
              }
          })
      };
      static all(promiseArr) {
          const values = [];
          let count = 0;
          return new Promise((resolve, reject) => {
              promiseArr.forEach((p, index) => {
                  Promise.resolve(p).then(
                      value => {
                          ++count;
                          values[index] = value;
                          if (count === promiseArr.length) resolve(values);
                      },
                      reason => reject(reason))
              });
          })
      };
      static race(promiseArr) {
          return new Promise((resolve, reject) => {
              promiseArr.forEach((p) => {
                  Promise.resolve(p).then(
                      value => resolve(value),
                      reason => reject(reason)
                  )
              })
          })
      };
  }
  w.Promise = Promise;
})(window)

