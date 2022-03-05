import { registerMicroApps, start, initGlobalState } from "qiankun";

registerMicroApps([
  {
    name: "sub-app", // app name registered
    entry: "//localhost:3001",
    container: "#subContainer",
    activeRule: "/sub",
  },
]);

start();

const qiankunGlobalAction = initGlobalState({ test: "" });
export { qiankunGlobalAction };
