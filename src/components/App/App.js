import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/users' component={Users}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
