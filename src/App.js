import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NoteNavBar, NoteCardTwo, UINewNote} from "./ui-components";
import {Routes, Route} from 'react-router-dom'

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><NoteNavBar/><NoteCardTwo/></div>} />
<Route exact path='/new' element= {<UINewNote/>} />

</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);