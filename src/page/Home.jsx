import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter, getTrending } from "../redux/actions";

import Carrousel from "../components/listings/Carrousel";
import Nav from "../components/listings/Nav";
import Post from "../components/card/Post";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();
  const trending = useSelector((state) => state.data.trending);
  const post = useSelector((state) => state.data.post);

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`d-flex flex-column vh-100 vw-100 ${darkMode ? "dark" : ""}`}
    >
      <Nav mode={darkMode} change={toggleDarkMode} />
      <div
        className="d-flex flex-column flex-grow-1 w-100"
        style={{ backgroundColor: darkMode ? "#353740" : "#DAE0E6" }}
      >
        <div className="d-grid gap-2 p-3">
          <span className={`fw-bold fs-6  ${darkMode ? "text-white" : ""}`}>
            En tendencia hoy
          </span>
          <Carrousel items={trending.slice(0, 3)} />
        </div>
        <div className="container gap-4 p-3 bg-white d-flex justify-content-center w-100">
          {["NEW", "HOT", "RISING"].map((label, idx) => (
            <button
              key={idx}
              className={`btn ${
                darkMode ? "btn-secondary" : ""
              }  rounded-pill px-4 py-2 border border-primary`}
              onClick={() => dispatch(filter(label.toLocaleLowerCase()))}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="container d-grid gap-3 py-3 px-0 overflow-auto ">
          {post.slice(0, 10).map(({ data }, idx) => (
            <Post key={idx} item={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
