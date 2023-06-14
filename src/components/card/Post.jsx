import React from "react";

export default function Post({ item }) {
  return (
    <div className="container d-grid bg-white w-75 p-4 shadow my-0 mx-auto">
      <div className="container gap-1">
        <span>Posteado por </span>
        <a
          href={`https://www.reddit.com/${item.subreddit_name_prefixed}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          {item.subreddit_name_prefixed}
        </a>
      </div>
      <div className="d-grid gap-2">
        <span
          className="fw-bold py-2 cursor-pointer"
          onClick={() => window.open(item.url, "_blank")}
        >
          {item.title}
        </span>
        <div className="p-2 overflow-hidden">
          <p className="text-start">{item.selftext}</p>
        </div>
      </div>
    </div>
  );
}
