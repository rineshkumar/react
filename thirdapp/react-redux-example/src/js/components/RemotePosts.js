import { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions"
const mapStateToProps = (reduxState) => {
    console.log("Mapping state to props ")
    return {
        remoteArticles: reduxState.remoteArticles.slice(0, 10)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRemoteArticles: () => dispatch(getData)
    }
}
class ConnectedRemotePosts extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
        this.props.getRemoteArticles();
    }

    render() {
        const { remoteArticles } = this.props;
        return (
            <ul>
                {remoteArticles.map(ra => <li key={ra.id}>{ra.title}</li>)}
            </ul>
        );
    }
}
const RemotePosts = connect(mapStateToProps,mapDispatchToProps)(ConnectedRemotePosts);
export default RemotePosts;


