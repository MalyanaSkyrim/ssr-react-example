import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import RowRepo from "./RowRepo";

class ListRepos extends Component {
  render() {
    return (
      <div className="listRepos-container">
        <InfiniteScroll
          pageStart={this.props.pageStart}
          loadMore={this.props.loadMoreRepos}
          hasMore={this.props.hasMore}
          loader={
            <div className="loader" key={0}>
              <img src="wait.gif" alt="wait gif"></img>
            </div>
          }
        >
          {this.props.repos.map((repo, index) => (
            <RowRepo
              key={index}
              title={repo.title}
              description={repo.description}
              avatarUrl={repo.avatarUrl}
              nbStars={repo.nbStars}
              nbIssues={repo.nbIssues}
              timeInterval={repo.timeInterval}
              ownerName={repo.ownerName}
              repoUrl={repo.repoUrl}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ListRepos;
