import React, { Component } from "react";
import "./App.css";
import { Navbar, Top, Bio, Technical, Projects, Blog } from "./Pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Top
        title="Top"
          dark={true}
          id="top"
        />
        <Bio
          title="Bio"
          dark={false}
          id="bio"
        />
        <Technical
          title="Technical"
          dark={true}
          id="Technical"
        />
        <Projects
          title="Projects"
          dark={false}
          id="projects"
        />
        <Blog
          title="Blog"
          dark={true}
          id="blog"
        />
      </div>
    );
  }
}

export default App;
