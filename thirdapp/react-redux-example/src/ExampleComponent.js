import {Component} from "react"

class ExampleComponent extends Component{
    //Constructor
    constructor(props){
        super(props)
        //State setup 
        this.state = {
            articles:  [
                {title: "Hello World 1", id : 1 },
                {title: "Hello World 2", id : 1 },
            ]
        }
    }
    render(){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const {articles} = this.state; //Destructuring Assignment 
        return (
            <ul>
                {
                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                    articles.map(x => <li key={x.id}>{x.title}</li>) // map for transforming input to f(input)
                }
            </ul>
        )

    }
}