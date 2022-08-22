import React, { Component } from "react";
import { loadRepos } from "../redux/actionCreators/repoActionCreators";
import ListRepos from "./ListRepos";
import { connect } from "react-redux";

class ListReposContainer extends Component {
  render() {
    const { repos, hasMore, loadMoreRepos } = this.props;
    const customProps = {
      repos,
      hasMore,
      loadMoreRepos,
      pageStart: 0
    };
    return <ListRepos {...customProps}></ListRepos>;
  }
}

const mapStateToProps = state => ({
  hasMore: state.repoReducer.hasMore,
  repos: state.repoReducer.repos
});

const mapDispatchToProps = dispatch => ({
  loadMoreRepos: page => dispatch(loadRepos(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListReposContainer);
