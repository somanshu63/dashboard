import React from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <div className="sidebar padding-1">
          <ul>
            <a
              className="brand fs-24 black flex align-center margin-1"
              href="/"
            >
              <img src="dashboard.png" alt="dashboard"></img>
              Dashboard
            </a>
            <NavLink
              activeClassName="active"
              className="black fs-16"
              exact
              to="/"
            >
              <li className="padding-1 links">
                <i className="fa-solid fa-house padding-0-1"></i>home
              </li>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="black fs-16"
              exact
              to="/articles"
            >
              <li className="padding-1 links">
                <i className="fa-solid fa-a padding-0-1"></i>Articles
              </li>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="black fs-16"
              exact
              to="/help"
            >
              <li className="padding-1 links">
                <i className="padding-0-1 fa-solid fa-handshake-angle"></i>Help
              </li>
            </NavLink>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
