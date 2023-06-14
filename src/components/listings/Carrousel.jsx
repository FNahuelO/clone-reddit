import React from "react";
import Card from "../card/Card";

export default function Carrousel({ items }) {
  return (
    <div className="container d-grid">
      <div className="row justify-content-center gap-2 flex-md-nowrap">
        {items.map(({ data }, key) => (
          <div className="col-sm-5 col-md-4 col-lg-3" key={key}>
            <Card item={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
