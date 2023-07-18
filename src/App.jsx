import React from 'react'
import './App.scss'
import Button from './assets/component/button';
import Display from './assets/component/display';
import Control from './assets/component/control';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isCounting : false,
      breakTime : 0,
      controlTime : 0,
      minute : 0,
      second : 0,
    }
  }
  
  render(){
    return(
      <div className='container'>
        <Button/>
        <Display minute = {this.state.minute} second = {this.state.second}/>
        <Control/>
      </div>
    )
  }
}

export default App
