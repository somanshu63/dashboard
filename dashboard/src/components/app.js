import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
