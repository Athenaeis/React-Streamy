import React from "react";
import { Router, Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import history from "../history";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link
        onClick={() => {
          history.push("/");
          history.go();
        }}
        to="/"
        className="item"
      >
        Streamy
      </Link>
      <div className=" right menu">
        <Link
          onClick={() => {
            history.push("/");
            history.go();
          }}
          to="/"
          className="item"
        >
          All streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
