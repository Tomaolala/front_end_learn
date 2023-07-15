class Store {
    constructor(options) {
        this.$options = options
    }



    // 重写 store身上的state 的get 和 set
    get state() {
        return this.$$state
    }
    set state(v) {
        console.error('please use replaceState to reset state');
    }

}

function install(_vue) {

}
export default {
    Store,
    install
}