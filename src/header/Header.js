import React from "react";
import {AiFillHome} from "react-icons/ai"
import {BsMessenger} from "react-icons/bs"
import {FaRegHeart} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
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
          <li><AiFillHome /></li>
          <li><BsMessenger/></li>
          <li><FaRegHeart/></li>
          <li><CgProfile/></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
