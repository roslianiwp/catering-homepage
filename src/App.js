import { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SidebarWidget from "./components/Sidebar";
import OpeningContent from "./components/Opening";
import Portfolio from "./components/Portfolio";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <Fragment>
      <Navbar isClicked={clicked} clickIt={setClicked} />
      <SidebarWidget isClicked={clicked} />
      <OpeningContent />
      <Portfolio />
    </Fragment>
  );
}

export default App;
