import React from "react";
import "./index.css";
import { Link, Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="layout">
      <div className="left">
        <div>
          <Link to="/home">首页</Link>
        </div>
        <div>
          <Link to="/detail">详情</Link>
        </div>
        <div>
          <Link to="/sub/test">微应用</Link>
        </div>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};
