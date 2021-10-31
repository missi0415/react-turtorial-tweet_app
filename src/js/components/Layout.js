import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

@connect((store) => {
  return {
    user:store.userReducer.user,
    userFetched: store.userReducer.fetched,
    tweets: store.tweetsReducer.tweets,
    tweetsFetching: store.tweetsReducer.fetching
  };
})

export default class Layout extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }
  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }
  render() {
    const { user, tweets, tweetsFetching } = this.props;

    if (tweetsFetching === true ){
      return (<div>fetxhing...</div>);
    }
    if (!tweets.length){
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>;
    }
    const mappedTweets = tweets.map
  }
}