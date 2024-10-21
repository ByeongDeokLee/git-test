import * as React from "react";
// import './App.css';

import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Exflie from "./components/Exflie";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile name="병덕1" job="개발자1" />
        <Counter />
        <Exflie />
      </div>
    );
  }
}

export default App;
