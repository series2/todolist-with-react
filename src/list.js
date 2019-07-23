import React from "react";
//ここで情報を管理する
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolists: [
        {
          genre: "大学",
          task: "テスト勉強",
          date: "2019.7.20",
          deadline: "2019.07.21",
          done: false
        },
        {
          task: "おつかい",
          date: "2019.7.23",
          genre: "家",
          deadline: "2019.07.25",
          done: false
        }
      ]
    };
  }

  render() {
    const todolists = this.state.todolists;
    const moves = todolists.map((todo, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <div className="genre">{todo.genre}</div>
          <div className="task">{todo.task}</div>
          <div className="date">{todo.date}</div>
          <div className="deadline">{todo.deadline}</div>
          <div className="done">{todo.done}</div>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="list">
        <div>ここにListを表示</div>
        <ol>{moves}</ol>
      </div>
    );
  }
}

export default List;
