import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from './navigation.js'
import Articles from './ArticleList.js'
import Article from './article.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentWillMount () {
    axios.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=496adc0095e04b3e9aca4c0ad74e1e63')
    .then(({data}) => {
      // console.log(data.articles);
      this.setState({
        news: data.articles
      })
      // console.log(data);
      console.log(this.state.news)
    }).catch((reason) => {
      console.log("ERROR ", reason);
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Articles news={ this.state.news } />
          <Route exact path="/article/:id" render={ Article } />
        </div>
      </Router>
    );
  }
}

export default App;
