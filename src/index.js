import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ScrollToTop />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
