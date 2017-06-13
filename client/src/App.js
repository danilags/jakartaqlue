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
    width: '100%',
  },
  listTab: {
    padding: 10,
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
                <li style={styles.listTab}><Link to="/" style={{ textDecoration: 'none' }}>Qlue</Link></li>
                <li style={styles.listTab}><Link to="/waze" style={{ textDecoration: 'none' }}>Waze</Link></li>
                <li style={styles.listTab}><a href="https://github.com/danilags" style={{ textDecoration: 'none' }}>Daniel Sidabutar</a></li>
              </ul>
            </div>
            <div className="wraproute">
              <div className="route">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/waze" component={Waze}/>
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
