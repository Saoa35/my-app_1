import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


class Home extends React.Component {

  render() {

    return(
      <div>
        <h3>
          Home Page
        </h3>
      </div>
    )
  }
}

class AboutPage extends React.Component {

  render() {

    return(
      <div>
        <h3>
          About Page
        </h3>
      </div>
    )
  }
}

class Users extends React.Component {

  render() {

    return(
      <div>
        <h3>
          Users Page
        </h3>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
