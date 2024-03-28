import React from "react";
import CheckLists from "./CheckLists";

function MainRequestChecklist() {
  return (
    <div
      className="main_request_checklist_root_wrapper"
      style={{ width: "100%" }}
    >
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <CheckLists />
        <CheckLists />
      </div>
    </div>
  );
}

export default MainRequestChecklist;
