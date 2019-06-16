import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Hazard from './components/Hazard';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ServicesPage from './components/pages/Services';
import Contacts from './components/pages/Contacts';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <About />
                <Hazard />
              </React.Fragment>
            )}
          />
          <Navbar />
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <Services />
                <ContactUs />
              </React.Fragment>
            )}
          />
          <Route exact path='/services' component={ServicesPage} />
          <Route exact path='/contacts' component={Contacts} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
