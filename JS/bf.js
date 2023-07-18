//答案
class Scheduler {
    constructor() {
        this.count = 2
        this.queue = []
        this.run = []
    }

    excute(task) {
        this.run.push(task)
        Promise.resolve(task()).then(() => {
            task.resolve()
            this.run.splice(this.run.findIndex(task), 1)
            if (this.queue.length) {
                this.excute(this.queue.shift())
            }
        })
    }

    add(task) {

        return new Promise((res, rej) => {
            task.resolve = res
            if (this.run.length < this.count) {
                this.excute(task)
            } else this.queue.push(task)

        })
    }
}
const timeout = (time) =>
    new Promise((resolve) => {
        setTimeout(resolve, time)
    })

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order))
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')