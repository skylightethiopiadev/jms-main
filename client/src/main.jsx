import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice.js";
// import { Provider } from "react-redux";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <Provider store={apiSlice}>
//         <App />
//       </Provider>
//     </React.StrictMode>
//   </BrowserRouter>
// );

// orignal
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
