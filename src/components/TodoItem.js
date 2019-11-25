import React from "react"

class TodoItem extends React.Component {

    constructor() {
        super()


    }

    render() {

        const { id, text, completed } = this.props.todos

        const todoItemCompleted = {
            "color" : "gray",
            "textDecoration": "line-through"
        }

        return (

            <div className="todo-name">
                <label className="todo-item">
                    <input
                    className="todo-checkbox"
                    type="checkbox"
                    checked={completed}
                    onChange={
                        () => {
                            this.props.handleChange(id)
                        }
                    } />
                    {completed ? <span style={todoItemCompleted}>{text}</span> : text }
                </label>
            </div>
        )
    }
}

export default TodoItem






















































// import React from "react"

// class TodoItem extends React.Component {

//     constructor() {
//         super()
//     }

//     render() {

//         const { id, text, completed } = this.props.todo

//         return (
//             <div className="todo-name">
//                 <label className="todo-item">
//                     <input className="todo-checkbox"
//                         type="checkbox"
//                         onChange={() => { this.props.handleChange(id) }}
//                         checked={completed}
//                     />
//                     {text}</label>
//             </div >
//         )
//     }

// }

// export default TodoItem