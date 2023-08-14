import React from "react";
import Sidebar from "@theme-original/DocPage/Layout/Sidebar";
import style from "./index.css";

export default function SidebarWrapper(props) {
  return (
    <div className="customSidebarWrapper">
      <Sidebar {...props} />
    </div>
  );
}