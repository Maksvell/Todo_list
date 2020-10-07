import React from 'react'
import s from '../stylesheets/todo.module.css'

export const Todo = (props) => { // Dump component - отрисовка
    return (
        <div status={props.status} className={s.wrapper}>
            <h2>{props.title}</h2>
            <p className={s.taskDesc}>{props.description}</p>
            <time>{props.date}</time>
            <p className={s.taskStatus}>{props.statusText}</p>
            <button onClick = {() => props.updateStatus(props.id)}> {props.buttonText}</button>
        </div>
    )
}
