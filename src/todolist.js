import React from "react";
import Form from "./form.js";
//import List from "./list.js";
//注意
//this このクラス
//props 渡した時にその値の前につける約束の文字

//todolistコンポーネントはtodolistaとformを表示せよと命令する。
class Todolist extends React.Component {
  constructor() {
    super();
    /*
constructor(props) {
  super(props);
  this.state = {
    todos: [
      {
        id: 1,
        title: "",
        desc: "",
        done: true,
      }
    ]
  }
}
handleSubmit(a) {
  this.setState(state => ({
    todos: state.todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    })
  })
)
}


*/
    // id: this.todos.id, //idは消去しても一意にしたい
    const todos0 = [
      /* {
        id0: 1,
        genre0: "大学",
        task0: "物理実験計画書",
        day0: "2019/05/31",
        deadline0: "明後日",
        done0: true
      },*/
      {
        id0: 2,
        genre0: "Hello, Redux!",
        task0: "Reduxも始めました",
        day0: "2019/08/01",
        deadline0: "しあさって",
        done0: false
      }
    ];

    this.state = {
      todos1: todos0,
      countTodo1: todos0.length + 1
    };
  }
  Today = function() {
    // 現在の日時

    var d = new Date();
    var year = d.getFullYear();
    var month = ("0" + (d.getMonth() + 1)).slice(-2); // 月
    var date = ("0" + d.getDate()).slice(-2); // 日
    return year + "-" + month + "-" + date;
    /* 
   const d = new Form();
   retturn d.Today();
   */
  };

  handleSubmit(e) {
    e.preventDefault();
    const genre2 = e.target.genre1.value;
    const task2 = e.target.task1.value;
    const deadline2 = e.target.deadline1.value;
    const todos2 = this.state.todos1.slice();
    //this.state.todos1という数列をtodos2としてコピー
    const countTodo2 = this.state.countTodo1;

    todos2.push({
      id0: countTodo2,
      genre0: genre2,
      task0: task2,
      day0: this.Today(),
      deadline0: deadline2,
      done0: false
    });
    //コピーした数列todos2にtargetの値を上のような項目名で代入

    this.setState({ todos1: todos2 });

    //alert(countTodo2);
    //alert("check : " + this.state.todos1[countTodo2 - 2].task0);

    this.setState({ countTodo1: countTodo2 + 1 });

    e.target.genre1.value = "大学";
    e.target.task1.value = "hoge";

    //e.targer.deadline.value = "2019-07-21";
  }

  //以下のsetTodoStatusでTodoの状態（完了/未完了）を管理
  setTodoStatus(clickTodo) {
    const todos = this.state.todos1.slice();
    const todo = todos[clickTodo.id0 - 1];
    todo.done = !todo.done0;
    todos[clickTodo.id0 - 1] = todo;

    this.setState({ todos1: todos });
  }

  //以下のrenderはこのコンポーネントを開くと人による処理（todo作成など
  //より真っ先に表示する
  /*以下の<Form handleSubmit1={this.handleSubmit.bind(this)} />について
From>コンポーネントを表示するとともにFromコンポーネントに
handlesubmit1は～という値だよといっている
左のhandleSubmiは<送り先のhandlesubmitとあっていればなんでもよい。
this.handleSubmitのほうがここにあるhandlesubmitメソッドをあらわす。
*/
  render() {
    return (
      <div className="todolist">
        <h1>todoアプリを作ってみた</h1>
        <Form handleSubmit1={this.handleSubmit.bind(this)} />
        <TodoLista
          todos5={this.state.todos1}
          setTodoStatus={this.setTodoStatus.bind(this)}
        />
      </div>
    );
  }
  //<TodoLista todos5={this.state.todos1} />により
  //TodoListaでthis.state.todos1をtodos5として使える
  //実際のTodoLista内ではthis.props.todo5で使う。
}
/*Todolistコンポーネントで各todoをさばく
以下のthis.props.todoは<Todolista todos1>
に書いてある値this.state.todosである*/
//set.TodoStatusは結局孫コンポーネントに渡している
class TodoLista extends React.Component {
  render() {
    const todos6 = this.props.todos5.map(todo7 => (
      <Todo
        key={todo7.id0}
        {...todo7}
        setTodoStatus={this.props.setTodoStatus}
      />
      /*TodoListから複数のTodoができる時など、
      子コンポーネントに同じ形式の配列を渡す時は、
      それらを区別するための絶対に重複しないkeyを設定する
      必要がある。今回はtodo7.id0をkeyに入れる。
{...todo7}はtodo7に入っている要素を全て引き継ぐ、
と言う意味。

      */
    ));
    /*returnでの配列の入ったtodos6を返すことで、
Todoコンポーネントでpropsとして受け取ることができる。
{}で変数展開ができる
*/
    return <ul>{todos6}</ul>;
  }
}
//Todoコンポーネントでは表示の仕方を決める。
class Todo extends React.Component {
  render() {
    const className = "undone";
    const link = this.props.done0 ? "元に戻す" : "完了！";
    //三項演算子。this.props.done0が何も無いまたはtrueの時は
    //"元に戻す"を選び、falesの時は"完了！をえらぶ
    return (
      <li className={className}>
        <span>{this.props.id0}</span>
        <span>ジャンル：{this.props.genre0}　　</span>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            this.props.setTodoStatus(this.props);
          }}
        >
          {link}
        </a>
        <p>タスク:{this.props.task0}</p>
        <p>作成日:{this.props.day0}</p>
        <p>締め切り:{this.props.deadline0}</p>
      </li>
    );
  }
}

export default Todolist;
