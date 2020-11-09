import React, { Component } from "react";
import "../css/feature.css";
import "../css/sidebar.css";
import { Container, Row, Col } from "reactstrap";
import Event from "../components/event";
import Axios from "axios";

export default class feature extends Component {
  state = {
    topic: "Technology",
    articles: [],
  };

  technologyClick = () => {
      this.setState({topic: "Technology",});
      Axios
        .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=171fd2e3a85a4d02bab46298832ebc10&category=technology")
        .then((res) => {
            console.log(res.data.articles)
            this.setState({articles: res.data.articles})
      });
      console.log(this.state.topic);
  }

  entertainmentClick = () => {
    this.setState({topic: "Entertainment",});
    Axios
        .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=171fd2e3a85a4d02bab46298832ebc10&category=entertainment")
        .then((res) => {
            console.log(res.data.articles)
            this.setState({articles: res.data.articles})
        })
    console.log(this.state.topic);
  }

  sportsClick = () => {
    this.setState({topic: "Sports",});
    Axios
        .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=171fd2e3a85a4d02bab46298832ebc10&category=sports")
        .then((res) => {
            console.log(res.data.articles)
            this.setState({articles: res.data.articles})
        });
    console.log(this.state.topic);
  }

  componentDidMount(){
      Axios
        .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=78b9d599c4f94f8fa3afb1a5458928d6&category=technology")
        .then((res) => {
            console.log(res.data.articles)
            this.setState({articles: res.data.articles})
        })
  }

  render() {
    return (
      <Container className="user" fluid={true}>
        <Container className = "sidebar" fluid={true}>
            <a className = "logo" href = "/">FETCH</a>
            <a onClick={this.technologyClick}>T</a>
            <a onClick={this.entertainmentClick}>E</a>
            <a onClick={this.sportsClick}>S</a>
        </Container>
        <Container className="user-main" fluid={true}>
          <div className="user-main-topic">
            <h1>{this.state.topic}</h1>
          </div>
          <div className="user-main-content">
            {this.state.articles.map((article, index) => (
                <div className = "event-container">
                    <Event
                    key={article.source.id}
                    author={article.author || article.source.name}
                    title={article.title}
                    event={article}
                    date={article.publishedAt.slice(0, article.publishedAt.search("T"))}
                />
                </div>
            ))}
          </div>
        </Container>
      </Container>
    );
  }
}
