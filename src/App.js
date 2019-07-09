import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import HeaderNavigation from './components/HederNavigation';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <>
      <HeaderNavigation />
      <Router>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path ="/news" component={News} />
          <Route path ="/contact" component={Contact} />
          <Route path = "/footer" component={Footer} />
        </Switch>
        <Footer/>

      </Router>
      </>
    )
  }
}
export default App;
