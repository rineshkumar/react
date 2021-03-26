import {connect} from "react-redux"
const ConnectedList = (props) => {
    const { articles } = props;
    return (
        <ul>
            {articles.map(x => <li key={x.id}>{x.title}</li>)}
        </ul>
    )
}

const mapStateToProps = (reduxState) => {
    return { articles: reduxState.articles }
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;