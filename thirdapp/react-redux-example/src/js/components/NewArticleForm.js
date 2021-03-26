import React, { Component } from "react";
import {addArticle} from "../actions/actions"
import {connect} from "react-redux"
const mapDispatchToProps = (dispatch) => {
    return {
        // Mappping a props function call to a store dispatch action call 
        addArticle: (article) => dispatch(addArticle(article))
    }
}
class NewArticleConnectedForm extends Component {
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
        const {title} = this.state;
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

const NewArticleForm = connect(null, mapDispatchToProps)(NewArticleConnectedForm);
export default NewArticleForm;