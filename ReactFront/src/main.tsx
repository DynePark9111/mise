import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookmarkContextProvider } from "./contexts/bookmarkContext";
import { SidebarContextProvider } from "./contexts/sidebarContext";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarContextProvider>
      <BookmarkContextProvider>
        <App />
      </BookmarkContextProvider>
    </SidebarContextProvider>
  </React.StrictMode>
);
