import React, { Component } from "react";
import NewsList from "./NewsList";
import "isomorphic-fetch";

class News extends Component {

    constructor(props) {
        super(props);
        let initialData;
        if (props.staticContext && props.staticContext.initialData) {
            initialData = props.staticContext.initialData;
        } else {
            // if there is no initial data in props, then its browser,
            // so grab data from window object;
            initialData = window.__initialData__;
            delete window.__initialData__;
        }
        this.state = { news: initialData };
    }

    componentDidMount(){
      if(!this.state.news) {
        console.log('loading data on client')
        News.requestInitialData().then((news)=>this.setState({news}))
      }
    }

  static requestInitialData() {
    return fetch("http://127.0.0.1:5000/api/news")
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { news } = this.state;
    return <NewsList news={news} />;
  }
}

export default News;