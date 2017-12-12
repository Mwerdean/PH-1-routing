import React, { Component } from 'react';
// import { Route } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home/Home.js';
import People from './People/People.js';
import About from './About/About.js';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Character from './Character/Character';
// import { Switch } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router';

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/people">People</Link>
      </div>
        {/* <Route exact path="/" render={() => <div>Hello</div>}/>
        <Route path="/about" render={() => <div>About</div>} />
        <Route path="/people" render = {() => <div>People</div>} /> */}
        <Route exact path="/" component={Home}/>
        <Route path="/about" render={() => 
          <About>
            <Route path ="/about/faq" component={FAQ}/>
            <Route path ="/about/company" component={Company}/>
          </About>
        }/>
        <Switch>
          <Route path="/people/:id" component={Character}/> 
          <Route path="/people" component={People}/>
        </Switch>
      </div>
    );
  }
}

export default App;
