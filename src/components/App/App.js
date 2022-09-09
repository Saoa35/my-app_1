import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
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

const Navigate = () => {
  return (
    <ul>
      <li>
        <Link to='/'>
          Home
        </Link>
      </li>

      <li>
        <Link to='/about'>
          About
        </Link>
      </li>

      <li>
        <Link to='/users'>
          Users
        </Link>
      </li>
    </ul>
  )
}

function App() {
  return (
    <div className="App">

      <h1>
        React Router DOM!
      </h1>

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
