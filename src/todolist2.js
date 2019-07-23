import React from "react";
import "./css/todolist2.css";
import "./css/form2.css";

//todolist2コンポーネントはtodolist,とformを表示せよと命令する。
class Todolist2 extends React.Component {
  constructor() {
    super();

    // id: this.todos.id, //idは消去しても一意
    const todos = [
      {
        id: 1,
        title: "Hello, React!",
        desc: "React始めました",
        done: false
      },
      {
        id: 2,
        title: "Hello, Redux!",
        desc: "Reduxも始めました",
        done: false
      }
    ];
    this.state = {
      todos: todos,
      countTodo: todos.length + 1
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false
    });

    this.setState({ todos });
    this.setState({ countTodo: countTodo + 1 });

    e.target.title.value = "";
    e.target.desc.value = "";
  }

  render() {
    return (
      <div className="todolist2">
        <h1>todoアプリを作ってみた</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
//Todolistコンポーネントで各todoをさばく
class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ));

    return <ul>{todos}</ul>;
  }
}
//Todoコンポーネントで表示の仕方を決める。
class Todo extends React.Component {
  render() {
    const className = "undone";
    const link = this.props.done ? "元に戻す" : "完了！";
    return (
      <li className={className}>
        <span>{this.props.id}</span>
        <span>：{this.props.title}　　</span>
        <a href="">{link}</a>
        <p>{this.props.desc}</p>
      </li>
    );
  }
}

//以上はtodolist以下はform
class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="タイトル ※必須"
            defaultValue="reactの勉強"
          />
          <br />
          <textarea
            name="desc"
            placeholder="説明を入力"
            defaultValue="todoアプリを作っています！"
          />
          <br />
          <button type="submit">todoを作成</button>
        </form>
      </div>
    );
  }
}

export default Todolist2;
