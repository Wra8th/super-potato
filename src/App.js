import logo from './logo.svg';
import './App.css';
import Body from "./components/body"
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Body />
    )
  }
}

export default App;
