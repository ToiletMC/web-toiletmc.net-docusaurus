import React from "react";
import Main from "@theme-original/DocPage/Layout/Main";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import style from "./index.scss";
import clsx from "clsx";

export default function MainWrapper(props) {
  return (
    <div className="customFlexWrapper">
      <div className="customBreadcrumbsWrapper">
        <DocBreadcrumbs />
      </div>
      <div className={clsx("customMainWrapper")}>
        <Main {...props} />
      </div>
    </div>
  );
}
