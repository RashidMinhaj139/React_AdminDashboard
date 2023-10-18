import { useState } from "react";
import "./App.css";
import Header from "./components_2/Header";
import Sidebar from "./components_2/Sidebar";
import Home from "./components_2/Home";
import Right from "./components_2/right/Right";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
      <Right/>
    </div>
  );
}

export default App;
