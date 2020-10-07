import React from 'react';
import {TodoDisplay} from "./containers/TodoContainer";
import {Redirect, Route, Switch} from "react-router";
import {Todo} from "./components/Todo";
import {TodoCreator} from "./containers/TodoCreator";
import {Link} from "react-router-dom";
import k from "./stylesheets/main.css";
import s from "./stylesheets/todo.module.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {
                    id: 0,
                    title: "HTML",
                    description: "Доделать гипертекстовую разметку на странице",
                    date: "10-10-2020",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                },
                {
                    id: 1,
                    title: "CSS",
                    description: "Сделать полноценное стилевое оформление страницы, а не вот это вот дерьмо",
                    date: "10-10-2020",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                },
                {
                    id: 2,
                    title: "Задача",
                    description: "Задача просто для галочки",
                    date: "99-99-9999",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                },
                {
                    id: 4,
                    title: "Вечный двигатель",
                    description: "Насрать на законы физики",
                    date: "31-12-2020",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                },
                {
                    id: 5,
                    title: "Lorem Ipsum",
                    description: "Dolor sit amet, consectetur adipiscing elit. Nam aliquam, turpis et imperdiet",
                    date: "05-12-2020",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                },
                {
                    id: 6,
                    title: "Nam sodales",
                    description: "Sed aliquam, diam ac blandit molestie, dolor eros condimentum neque",
                    date: "06-12-2020",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                },
                {
                    id: 7,
                    title: "Curabitur rutrum",
                    description: "Neque in magna mollis fermentum. In auctor elit lectus, ac suscipit nisi",
                    date: "07-12-2020",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                },
                {
                    id: 8,
                    title: "Vestibulum convallis",
                    description: "Ut pretium, arcu in eleifend elementum, eros magna congue sem, vel iaculis nisl dui",
                    date: "08-12-2020",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                }
            ]
        }
        this.updateStatus.bind(this)
        this.addNewTodo.bind(this)
    }

    addNewTodo = (newTodo) => {
        console.log(newTodo)
        this.setState({
            todoData: [...this.state.todoData, newTodo]
        }, () => console.log(this.state.todoData))
    }

    updateStatus = (id) => {
        this.setState({
            todoData: this.state.todoData.map((todo) =>
                todo.id === id ? {
                        ...todo,
                        status: todo.status === 1 ? 2 : 1,
                        statusText: todo.status === 1 ? "Готово" : "В процессе",
                        buttonText: todo.status === 1 ? "Отмена" : "Сделано"
                    }
                    : todo)
        })
    }

    mapTodoData = () => this.state.todoData.map((todo) => <Todo {...todo} updateStatus={this.updateStatus}/>)

    render() {
        return (
            <Switch>
                <Route exact path={'/addTodo'}>
                    <TodoCreator addNewTodo={this.addNewTodo}/>
                    <Link to={'/myTodo'}>Go to todo list</Link>
                </Route>
                <Route exact path={'/myTodo'}>
                    <header>
                        <h1>Это мой TodoList!</h1>
                    </header>
                    <main>
                        <section>
                            <TodoDisplay todoList={this.mapTodoData()}/>
                            <div className={s.wrapper}>
                                <Link to={'/addTodo'}>
                                    <img alt="Ссылка" src="./images/plus.svg" height="100px" width="100px"/>
                                </Link>
                            </div>
                        </section>
                    </main>
                    <footer>
                        <span>Автор: Максим Иваницкий</span>
                    </footer>
                </Route>
                <Route exact path={'/'}>
                    <Link to={'/myTodo'}>Go to todo list</Link>
                    <Link to={'/addTodo'}>Go to creator</Link>
                </Route>
                <Route path={'/'} component={() => Redirect('/')}/>
            </Switch>
        )
    }
}

export default App;
