import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let count = 0;

class App extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: "React study",
        complete: true
      },
      {
        id: count++,
        body: "Redux study",
        complete: false
      }
    ],
    newTodoBody: ""
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };

  handleBtnClick = e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodoBody: ""
      });
    }
  };

  render() {
    const { todos, newTodoBody } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React TodoList</p>
        </header>
        <main className="App-main">
          <label>
            새 할일
            <input
              type="text"
              value={newTodoBody}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleBtnClick}>추가</button>
          </label>
          <ol>
            {todos.map(todo => (
              <li className={todo.complete ? "complete" : ""} key={todo.id}>
                <text className="todo-text">{`${todo.body}`}</text>
                <button
                  className="complete-btn"
                  onClick={e => {
                    this.setState({
                      todos: todos.map(t => {
                        const newTodo = {
                          ...t
                        };
                        if (t.id === todo.id) {
                          newTodo.complete = !t.complete;
                        }
                        return newTodo;
                      })
                    });
                  }}
                >
                  완료
                </button>
                <button
                  onClick={e => {
                    this.setState({
                      todos: todos.filter(t => t.id !== todo.id)
                    });
                  }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ol>
        </main>
      </div>
    );
  }
}

export default App;
