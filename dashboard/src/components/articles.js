import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data.json";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  render() {
    return (
      <div className="padding-2 main">
        <h2 className="fs-20 text-center green">Articles</h2>
        <ul>
          {data.articles.map((article, i) => {
            return (
              <li key={i} className="padding-1">
                <NavLink to={`/articles/${article.slug}`}>
                  <h4 className="padding-1-0 fs-18 green">{article.title}</h4>
                </NavLink>
                <address className="fs-16 darkgreen">{article.author}</address>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
