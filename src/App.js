import React from "react"
import todosData from "./todosData"
import TodoItem from "./components/TodoItem"

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            todos: todosData
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(id) {
        console.log("Changed", id)

        this.setState(prevState => {

            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })

    }

    render() {

        const todosComponents = this.state.todos.map(todo => <TodoItem key={todo.id} todos={todo} handleChange={this.handleChange} />)

        return (
            <div className="todo-wrapper" >
                {todosComponents}
            </div>
        )
    }

}

export default App



// import React from "react"
// import "./App.css"
// import todosData from "./todosData"
// import TodoItem from "./components/TodoItem"

// class App extends React.Component {

//     constructor() {
//         super()

//         this.state = {
//             todos: todosData
//         }

//         this.handleChange = this.handleChange.bind(this)



//     }

//     handleChange(id) {
//         console.log("Changed", id)

//         this.setState(prevState => {

//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             })
//             return {
//                 todos: updatedTodos
//             }

//         })
//     }

//     render() {
//         const todoComponents = this.state.todos.map((todo) => {
//             return <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
//         })
//         return (
//             <div className="todo-wrapper">
//                 {todoComponents}
//             </div>
//         )
//     }


// }

// export default App