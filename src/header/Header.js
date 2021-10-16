import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em 2em 0 ",
      }}
    >
      <h1>InstaGram</h1>
      <input
        placeholder="search"
        name="search"
        style={{ height: "1em", marginTop: "2.5em" }}
      />
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            width: "8em",
            marginTop: "2.5em",
          }}
        >
          <li>hp</li>
          <li>is</li>
          <li>no</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
