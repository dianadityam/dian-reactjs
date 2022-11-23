import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Komponen from "./Komponen";
import Navigation from "./Styling/navbar";
import Header from "./Styling/header";
import Bio from "./Styling/Bio";
import Contact from "./Styling/contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Bio />
      <Contact />
      <Komponen />
    </div>
  );
}

export default App;
