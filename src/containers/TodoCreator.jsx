import React from "react";
import {CreatorComponent} from "../components/CreatorComponent";

export class TodoCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            description: "",
            date: "",
            statusText: "В процессе",
            status: 1,
            buttonText: "Сделано"
        }
        this.handleFields.bind(this);
    }

    confirmTodoCreate = () => {
        this.props.addNewTodo(this.state)
    }

    handleFields = (action) => {
        switch (action.type) {
            case "UPDATE_ID":
                this.setState({id: action.value})
                break;
            case "UPDATE_TITLE":
                this.setState({title: action.value})
                break;
            case "UPDATE_DESCRIPTION":
                this.setState({description: action.value})
                break;
            // case "UPDATE_STATUS":
            //     this.setState({status: action.value})
            //     break;
            case "UPDATE_DATE":
                this.setState({date: action.value})
                break;
            case "CONFIRM":
                this.confirmTodoCreate();
                alert("SUCCESSFUL");
                this.setState({
                    id: "",
                    title: "",
                    description: "",
                    date: "",
                    statusText: "В процессе",
                    status: 1,
                    buttonText: "Сделано"
                })
                break;
            default: throw new Error(`UNKNOWN ACTION TYPE: ${action.type}`)
        }
    }

    render() {
        return (
            <CreatorComponent handler={this.handleFields} {...this.state}/>
        );
    }

}
