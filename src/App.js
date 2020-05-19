import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import AboutMe from './Components/AboutMe';
import AboutDave from './Components/AboutDave';
import Navbar from './Components/Navbar';
import Pets from './Components/Pets';
import Student from './Components/Student';
import Movies from './Components/Movies';

/*function App() {
  return (
    <div className="App">
      <h1>Hello, World</h1>
      <p id="paragraph"> I am a paragraph tag, with an id of paragraph. I should be blue.</p>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div>
      <h1>Would you like to know more about me?</h1>
    </div>
  )
}

const AnotherOne = () => {
  return (
    <div>
      <h1>This is another header, that includes about me</h1>
      <AboutMe />
    </div>
  )
}

const AfurtherOne = () => {
  return (
    <div>
      <h1>Le's smashh ittt!</h1>
    </div>
  )
}*/

class App extends Component { // student extends CodeNation
  render() { //render method is used inside of Class Based components
    return (
      <div className="App">
        <Heading />
        <AboutMe />
        <AboutDave />
        <Student name="Adam" age={22} />
        <Student name="Bilal" age={100} />
        <Navbar />
        <Pets name="Dexter" age={3} species="Labrador" type="dog" food="sausages" hobby="long walks" />
        <Movies />
      </div>
    )
  }
}

export default App;
