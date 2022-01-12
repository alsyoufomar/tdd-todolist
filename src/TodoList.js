class TodoList {
    constructor() {
        this.list = []
        this.nextID = 1
    }
    create(str) {
        const todo = {
            id: this.nextID,
            text: str,
            status: "incomplete"
        }
        this.nextID++
        this.list.push(todo)
        return todo
    }

    get allTodo() {
        return this.list
    }
    k
    setComplete(id) {
        this.list[id - 1]["status"] = "complete"
    }

    getTodosByStatus(status) {
        return this.list.filter(todo => todo["status"] === status)

    }

    getTodo(id) {
        for (let todo of this.list) {
            if (todo['id'] === id)
                return todo
        }
        return "Todo not found"
    }

    deleteTodo(id) {
        if (typeof (id) !== "number") return "invalid ID"
        return this.list.filter(todo => todo['id'] !== id)
    }

    getTodosByDate(time) {
        return this.list.filter(todo => todo['date'] == time)
    }
}

module.exports = TodoList
