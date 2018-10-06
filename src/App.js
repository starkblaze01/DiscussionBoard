import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import { firebase, storage, database, app } from './firebase/firebase';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);

  	this.app = app;
  	this.database = database;
  }

  render() {
    return (
    	<ThreadDisplay database = {this.database} />	
    );
  }
}

export default App;
