import React, { useState } from "react";
import IconReddit from "../style/assets/IconReddit";
import VectorSearch from "../style/assets/IconSearch";

export default function Nav({ mode, change }) {
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    change(isChecked);
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://www.reddit.com/search/?q=${input}`, "_blank");
  };

  return (
    <div className="py-2 px-3" style={{ width: "100%" }}>
      <div className="row flex-nowrap aling-items-around">
        <div className="d-none d-lg-inline p-2" style={{ width: "25%" }}>
          <IconReddit />
        </div>

        <div className="col-sm-3 col-md-4 flex-shrink-1">
          <div className="d-grid">
            <div className="position-relative d-grid align-items-center">
              <VectorSearch />
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  style={{
                    border: "none",
                    width: "100%",
                    backgroundColor: "#F6F7F8",
                    borderRadius: "2rem",
                    padding: ".5rem 2.5rem",
                    outline: "none",
                  }}
                  placeholder="Buscar en reddit"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-1 col-md-4 flex-shrink-1 m-auto">
          <div className="form-check form-switch m-auto">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxButton"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              className={`form-check-label ${isChecked ? "start" : "end"}`}
              htmlFor="checkboxButton"
            >
              {!isChecked ? "Modo Claro" : "Modo Oscuro"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
