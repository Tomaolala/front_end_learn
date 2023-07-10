const PromiseRace = function (arrP) {
    return new Promise((res, rej)=> {
    arrP.forEach(item => {
       item.then(r => {
            res(r)
        }).catch(e => {
            rej(e)
        })
    })
})
  }

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
// });


PromiseRace([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});