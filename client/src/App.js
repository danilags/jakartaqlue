import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


import Home from './components/Home'
import Waze from './components/Waze'

const styles = {
  wrapper: {
    margin: '0 auto',
    display: 'block',
    width: '100%',
    padding: '0 20px',
    flex: 1,
    justifyContent: 'flex-start'
  },
  leftSide: {
    width: '15%',
    display: 'table',
    float: 'left',
    position: 'absolute',
    background: '#ccc',
    overflow: 'hidden',
  },
  rightSide: {
    width: '85%',
    display: 'table',
    float: 'right'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userlogin: false
    }
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div className="wrapper">
              <div className="nav">
                <ul style={{ listStyle: 'none'}}>
                  <li style={{ padding: 10 }}><Link to="/" style={{ textDecoration: 'none' }}>Qlue</Link></li>
                  <li style={{ padding: 10 }}><Link to="/article" style={{ textDecoration: 'none' }}>Waze</Link></li>
                </ul>
              </div>
              <div className="rightSide">
                <div className="nav">
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/article" component={Waze}/>
                  </Switch>
                </div>
              </div>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
