import React, { useEffect } from "react";
import { qiankunGlobalAction } from "../../qiankun";

export default () => {
  useEffect(() => {
    qiankunGlobalAction.onGlobalStateChange((state, prev) => {
      console.log("主应用", state, prev);
    });
    qiankunGlobalAction.setGlobalState({
      test: "aaaaaaaaa",
    });
  }, []);
  return <div id="subContainer"></div>;
};
