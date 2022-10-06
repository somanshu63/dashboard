import React from "react";
import data from "../data.json";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }
  componentDidMount() {
    data.articles.map((article) => {
      if (article.slug === this.props.match.params.slug) {
        this.setState({
          article: article,
        });
      }
      return article;
    });
  }

  render() {
    return (
      <div className="main">
        {this.state.article ? (
          <>
            <h3 className="text-center fs-24 margin-2 green">
              {this.state.article.title}
            </h3>
            <address className="fs-20 green padding-1">
              {this.state.article.author}
            </address>
            <p className="fs-16 darkgreen padding-1">
              {this.state.article.slug}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Article;
