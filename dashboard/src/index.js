import React from "react";
import { createRoot } from "react-dom/client";
import Help from "./components/help";
import "./stylesheets/index.css";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Article from "./components/article";
import Articles from "./components/articles";
import { BrowserRouter, Route } from "react-router-dom";
import Error from "./components/error";

var container = document.getElementById("root");
var root = createRoot(container);
root.render(
  <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/articles" exact>
        <Articles />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="*">
        <Error />
      </Route>
      <Route path="/articles/:slug" component={Article}></Route>
    </div>
  </BrowserRouter>
);
