function fetchRetry(url.n) {
    return new Promise((res, rej) => {
        fetch(url).then(
            res()
        ).catch(e => {
            if(n>0){
                fetchRetry(url,n--)
            }else{
                rej(e)
            }
        })
    })
}

