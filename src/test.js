import React from "react";
class ToDoListItem extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}
class Test extends React.Component {
  constructor() {
    super();
    // ToDoListをstateに定義、初期値は []
    this.state = {
      todoList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    // formのデフォルトのイベントをキャンセル
    alert("エラーチェック0");
    e.preventDefault();
    //e.preventDefault();
    alert("エラーチェック1");
    /*
    // idがtitleのElementを取得
    const titleElement = e.target.elements["title"];
    // idがdescriptionのElementを取得
    const descriptionElement = e.target.elements["description"];

    // todoList stateに追加
    this.setState(
      {
        todoList: this.state.todoList.concat({
          title: titleElement.value,
          description: descriptionElement.value
        })
      },
      // stateの変更後に入力した値を空にする
      () => {
        titleElement.value = "";
        descriptionElement.value = "";
      }
    );*/
    alert("エラーチェック３");
  }

  render() {
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handlesubmit}>
          <div>
            <input id="title" placeholder="title" />
            <textarea id="description" placeholder="description" />
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </form>
        <div>
          {/* todoList配列の要素数分ToDoListItemコンポーネントを展開 */}
          {this.state.todoList.map(todo => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Test;
