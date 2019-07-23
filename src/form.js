import React from "react";
//import

class Form extends React.Component {
  Today = function() {
    // 現在の日時
    var d = new Date();
    var year = d.getFullYear();
    var month = ("0" + (d.getMonth() + 1)).slice(-2); // 月
    var date = ("0" + d.getDate()).slice(-2); // 日

    return year + "-" + month + "-" + date;
  };
  /*以下の<form onSubmit={this.props.handleSubmit1}>について
  this.props.handleSubmit1はTodolistクラスの<List~/>の
  左側の値を指す。TodolistクラスがFormクラスを
  importすることでその値にthis.propsをつければうけとれる。

  */
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit1}>
          ジャンル:
          <select name="genre1">
            <option>大学</option>
            <option>家</option>
            <option>趣味</option>
          </select>
          <br />
          内容:
          <textarea
            name="task1"
            placeholder="説明を入力"
            defaultValue="初回の投稿"
          />
          締め切り:
          <input type="date" name="deadline1" defaultValue={this.Today()} />
          <br />
          <button type="submit">todoを作成</button>
        </form>
      </div>
    );
  }
}
export default Form;
