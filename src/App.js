import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import RocketLeagueOverlay from "./Components/RocketLeagueOverlay";
import SnakeGame from "./Components/SnakeGame";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
      <Routes>
        <Route path ="/" element= {<div className="App">
          <Header data={this.state.resumeData.main} />
          <About data={this.state.resumeData.main} />
          <Resume data={this.state.resumeData.resume} />
          <Portfolio data={this.state.resumeData.portfolio} />
          <Contact data={this.state.resumeData.main} />
          <Footer data={this.state.resumeData.main} />
        </div>}/>
        <Route path ="/RocketLeagueOverlay" element={<RocketLeagueOverlay/>}/>
        <Route path ="/SnakeGame" element={<SnakeGame/>}/>
      </Routes>
      </Router>
    );
  }
}

export default App;
