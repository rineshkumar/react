import { Component } from "react";
import { connect } from "react-redux";
import { getDataUsingSaga } from "../actions/actions"
const mapStateToProps = (reduxState) => {
    return {
        remoteArticles: reduxState.remoteArticles.slice(0, 10)
    }
}

class ConnectedRemotePosts extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

        this.props.getDataUsingSaga("https://api.valentinog.com/api/link/");
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
const RemotePosts = connect(mapStateToProps, { getDataUsingSaga })(ConnectedRemotePosts);
export default RemotePosts;


