import React, { Component } from "react";
import addArticle from "../actions/actions"
const mapDispatchToProps = (dispatch) => {
    return {
        // Mappping a props function call to a store dispatch action call 
        addArticle: (article) => dispatch(addArticle(article))
    }
}
class ConnectedForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }
        //Event handlers for change in data and data submission 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (e) => {

        this.setState({ [e.target.id]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        //Sending data to redux
        this.props.addArticle({ title });
        //Setting localcomponent state
        this.setState({ title: "" });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;