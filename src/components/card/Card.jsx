import React from "react";

export default function Card({ item }) {
  const imageUrl = item?.preview?.images[0]?.source.url.replace(/&amp;/g, "&");
  const addSpacesToCamelCase = (string) => {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
  };
  return (
    <div
      className={`d-flex flex-column justify-content-end rounded-3 p-3 shadow`}
      style={{
        height: "15rem",
        backgroundImage: `url(${
          imageUrl || "https://www.te.gob.mx/fotos_principal/superior/19.jpg"
        })`,
        backgroundSize: imageUrl ? "cover" : "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span
        className="fw-bold text-white pointer text-initial"
        style={{ cursor: "pointer" }}
        onClick={() => window.open(item.url, "_blank")}
      >
        {item.title}
      </span>
      <span
        className="text-white fs-8"
        style={{ fontSize: "1rem", cursor: "pointer" }}
        onClick={() =>
          window.open(`https://www.reddit.com/user/${item.author}`, "_blank")
        }
      >
        {addSpacesToCamelCase(item.author)}
      </span>
    </div>
  );
}
