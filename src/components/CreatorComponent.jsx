import React from "react";

import s from '../stylesheets/creator.module.css'

export const CreatorComponent = (props) => {
    return (
        <div className={s.wrapper}>
            <h2>Add new TODO</h2>
            <input onChange={(e) => props.handler({
                type: "UPDATE_ID", value: e.target.value
            })} value={props.id} placeholder={"id"}/>

            <input onChange={(e) => props.handler({
                type: "UPDATE_TITLE", value: e.target.value
            })} value={props.title} placeholder={"title"}/>

            <input onChange={(e) => props.handler({
                type: "UPDATE_DESCRIPTION", value: e.target.value
            })} value={props.description} placeholder={"Description"}/>

            {/*<select onChange={(e) => props.handler({*/}
            {/*    type: "UPDATE_STATUS", value: e.target.value*/}
            {/*})} value={props.status}>*/}
            {/*    <option disabled>Статус</option>*/}
            {/*    <option value="To Do" selected>Todo</option>*/}
            {/*    <option value="In Progress">In Progress</option>*/}
            {/*    <option value="Complete">Complete</option>*/}
            {/*</select>*/}

            <input type={"date"} onChange={(e) => props.handler({
                type: "UPDATE_DATE", value: e.target.value
            })} value={props.date} placeholder={"date"}/>
            <input onClick={() => props.handler({type: "CONFIRM"})} type={"submit"}/>
        </div>
    )
}
