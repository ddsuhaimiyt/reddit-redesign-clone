import React from "react";
import "./Posts.css";
import PostItem from "./PostItem";

function Posts() {
  const posts = [
    {
      upvote: 547,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "Questions about new wallet",
      comments_count: 284,
      user: "theindependentonline",
      subreddit: "politics",
    },
    {
      upvote: 27,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "Amazing customer supports for child",
      comments_count: 70,
      user: "thepez",
      subreddit: "gaming",
    },
    {
      upvote: 1064,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title:
        "i saw enola holmes (the movie) and now i want to read something similar to that",
      comments_count: 70,
      user: "cronaldo",
      subreddit: "soccer",
    },
    {
      upvote: 980,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title:
        "Jorge Jesus to Ruben Dias: You're leaving a club that is much bigger than Manchester City, it is only smaller financially.",
      comments_count: 70,
      user: "lionelandresmessi",
      subreddit: "nba",
    },
    {
      upvote: 5452,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "TIFU by identifying the wine used in Catholic Communion",
      comments_count: 70,
      user: "billTheGates",
      subreddit: "technology",
    },
    {
      upvote: Math.floor(Math.random() * 10000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "When did you know you were ready to become a manager?",
      comments_count: Math.floor(Math.random() * 400),
      user: "zest22oneThree",
      subreddit: "technology",
    },
    {
      upvote: Math.floor(Math.random() * 10000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "[Request] Premier League Netbusters 20/21 Season",
      comments_count: Math.floor(Math.random() * 400),
      user: "enttireGeneRation",
      subreddit: "football",
    },
    {
      upvote: Math.floor(Math.random() * 10000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "I just got laid off at Disneyland so I am free to talk about \"The Strollers\"",
      comments_count: Math.floor(Math.random() * 400),
      user: "SomeGuyWithBeard",
      subreddit: "tifu",
    },
    {
      upvote: Math.floor(Math.random() * 10000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "This was the explanation to an integral problem. Did they integrate without trig substitution? How did they get to this step?",
      comments_count: Math.floor(Math.random() * 400),
      user: "Sallt",
      subreddit: "mathematics",
    },
    {
      upvote: Math.floor(Math.random() * 10000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "American Murder: The Family Next Door (2020) - A trailer about Shannan Watts and her two young daughters who went missing. With the heartbreaking details emerging, the family's story made headlines around the world. [01:23:49]",
      comments_count: Math.floor(Math.random() * 400),
      user: "mkbhd",
      subreddit: "documentaries",
    },
    {
      upvote: Math.floor(Math.random() * 10000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "Trump and Biden greet their spouses post-debate",
      comments_count: Math.floor(Math.random() * 400),
      user: "whooopppss",
      subreddit: "politics",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default Posts;
