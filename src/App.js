
import React, {Component} from 'react';
import { LoginStack } from './Router';
import * as firebase from 'firebase';


class App extends Component {
  
componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyApNR8rculjarLRkoN8n3iMtXcU16M47c0",
      authDomain: "coursedata-4575c.firebaseapp.com",
      databaseURL: "https://coursedata-4575c.firebaseio.com",
      projectId: "coursedata-4575c",
      storageBucket: "coursedata-4575c.appspot.com",
      messagingSenderId: "265681481974"
    })
    

  }
 
  render() {
      return(
            <LoginStack />
      );
  }      
}

export default App;
