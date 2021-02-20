import React from "react";
import "./SideNav.css";

import { Link } from "react-router-dom";

function SideNav() {
  const menus = [
    { to: "/popular", text: "Popular" },
    { to: "/all", text: "All" },
    { to: "/random", text: "Random" },
  ];

  const subreddits = [
    "askreddit",
    "worldnews",
    "videos",
    "funny",
    "todayileaned",
    "pics",
    "gaming",
    'movies',
    'news', 
    'gifs',
    'aww',
    'mildlyinteresting',
    'showerthoughts',
    'televison',
    'jokes',
    'science',
    'soccer',
    'internetisbeautiful',
    'dataisbeautiful',
    'askscience'
  ];
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img src="data:image/png;base64,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" />
      </div>

      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search" />
        <i className="fas fa-search"></i>
      </div>

      <div className="sidenav__link">
        <ul className="sidenav__menu">
          {menus.map((menu) => (
            <li>
              <Link to={menu.to}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="sidenav__subreddit">
          {subreddits.map(subreddit => (
              <li><Link to={`/r/${subreddit}`}>{subreddit}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
