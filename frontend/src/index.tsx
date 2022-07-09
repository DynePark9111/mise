import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookmarkContextProvider } from "./contexts/bookmarkContext";
import { DarkmodeContextProvider } from "./contexts/darkmodeContext";
import { LvContextProvider } from "./contexts/lvContext";
import { SidebarContextProvider } from "./contexts/sidebarContext";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <BookmarkContextProvider>
        <LvContextProvider>
          <DarkmodeContextProvider>
            <App />
          </DarkmodeContextProvider>
        </LvContextProvider>
      </BookmarkContextProvider>
    </SidebarContextProvider>
  </React.StrictMode>
);
