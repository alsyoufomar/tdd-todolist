const TodoList = require("../src/TodoList.js")

const one = {
  id: 1,
  text: "turn the heating on!",
  status: "incomplete"
}
const two = {
  id: 2,
  text: "make the bed!",
  status: "incomplete"
}
const three = {
  id: 3,
  text: "Make some food!",
  status: "complete"
}
const four = {
  id: 4,
  text: "Wash the dishes!",
  status: "incomplete"
}
const five = {
  id: 5,
  text: "Feed the cat!",
  status: "incomplete"
}

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    expected = one
    // execute
    result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all todos", () => {
    // set up
    const expected = [one, two]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("make the bed!")
    const result = todoList.allTodo
    // verify
    expect(result).toEqual(expected)
  })

  it("set todo: complete by ID", () => {
    // set up
    expected = three
    // execute
    todoList.create("Do nothing!")
    todoList.create("turn the heating on!")
    const TODO = todoList.create("Make some food!")
    todoList.setComplete(3)
    result = TODO
    // verify
    expect(result).toEqual(expected)
  })

  it("return todos by status", () => {
    // set up
    expected = [one, two, five]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("make the bed!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    todoList.setComplete(3)
    todoList.setComplete(4)
    result = todoList.getTodosByStatus("incomplete")
    // verify
    expect(result).toEqual(expected)
  })

  it("return all complete todo's", () => {
    // // set up
    expected = [three]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("make the bed!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    todoList.setComplete(3)
    result = todoList.getTodosByStatus("complete")
    // verify
    expect(result).toEqual(expected)
  })

  it("search for TODO by id", () => {
    // set up
    expected = one
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    result = todoList.getTodo(1)

    // verify
    expect(result).toEqual(expected)
  })

  it("returns message if Todo not found", () => {
    // set up
    expected = "Todo not found"
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    result = todoList.getTodo(5)
    // verify
    expect(result).toEqual(expected)
  })

  it("deletes a todo item", () => {
    // set up
    expected = [one]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    result = todoList.deleteTodo(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("returns error message for invalid input", () => {
    // set up
    expected = "invalid ID"
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    result = todoList.deleteTodo("null")
    // verify
    expect(result).toEqual(expected)
  })
}) 