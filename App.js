import React from "react";
import BugTracker from "./BugTracker";
import { Provider } from "react-redux";

import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <BugTracker />
    </Provider>
  );
}
