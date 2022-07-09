import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { darkmodeContext } from "./contexts/darkmodeContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Map from "./pages/Map";
import NotFound from "./pages/NotFound";
import Reccomend from "./pages/Recommend";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

function App() {
  const { isDark } = useContext(darkmodeContext);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/recommend" element={<Reccomend />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
