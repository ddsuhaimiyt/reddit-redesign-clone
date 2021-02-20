import React from "react";
import "./PostItem.css";
import { Link } from "react-router-dom";
function PostItem(props) {
  const { post } = props;
  const title = post.title
  const link = title.toLowerCase().replaceAll(" ", "-")
  return (
    <div className="post">
      <div className="post__left">
        <i className="fas fa-caret-up"></i>
        <span>{post.upvote}</span>
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="post__center">
        <img src={post.image} alt="" />
      </div>
      <div className="post__right">
        <h3><Link to={`/${post.subreddit}/${link}`}>{post.title} </Link></h3>
        <span className="post__info">
          submitted an hour ago by
          <Link to={`/u/${post.user}`}> {post.user}</Link> to{" "}
          <Link to={`/r/${post.subreddit}`}> {post.subreddit}</Link>
        </span>
        <p className="post__info">
          <Link to={`/${post.subreddit}/${link}/comments`}>
            {post.comments_count} comments
          </Link>{" "}
          | share | save | hide | report
        </p>
      </div>
    </div>
  );
}

export default PostItem;
