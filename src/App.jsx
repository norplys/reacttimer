import React from 'react'
import './App.scss'
import Button from './assets/component/button';
import Display from './assets/component/display';
import Control from './assets/component/control';

let sound = new Audio('/beep.wav');

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      breakTime : 5,
      controlTime : 25,
      minute : 25,
      second : 0,
      interval : 0,
      now : 'stop',
    }
  }


  componentDidUpdate(np,ns){
    if(this.state.second < 0 && this.state.interval && this.state.minute != 0){
      this.setState({
        minute : this.state.minute - 1,
        second : 60,
      });
    }
    
    if(this.state.second === 0 && this.state.minute === 0 && this.state.interval && this.state.now === 'counting'){
      clearInterval(this.state.interval);
      this.playsound();
      this.setState({
        interval : 0,
      });
      setTimeout(() => {const Interval = setInterval(() => {
        this.setState({
          second : this.state.second - 1,
        })
      },1000)
      this.setState({
        now : 'breaktime',
        minute : this.state.breakTime,
        interval : Interval,
      })} ,4000);
    }

    else if (this.state.second === 0 && this.state.minute === 0 && this.state.interval && this.state.now === 'breaktime'){
      console.log('h')
      clearInterval(this.state.interval);
      this.playsound();
      this.setState({
        interval : 0,
      });
      setTimeout(() => 
      {const Interval = setInterval(() => {
        this.setState({
          second : this.state.second - 1,
        })
      },1000)
      this.setState({
        now : 'counting',
        minute : this.state.controlTime,
        interval : Interval,
      });},4000)
    }
  } 



  reset(){
    sound.pause();
    clearInterval(this.state.interval);
    this.setState({
      controlTime : 25,
      interval : 0,
      minute : 25,
      second : 0,
      breakTime : 5,
      now: 'stop'
    })
  }
  
  playsound(){
    sound.pause();
    sound.currentTime = 0;
    sound.play();

  }

  HandleClick(){
    if(this.state.interval){
      clearInterval(this.state.interval);
      this.setState({
        interval : 0,
        now : 'stop'
      })
      return;
    }
    const Interval = setInterval(() => {
      this.setState({
        second : this.state.second - 1,
      })
    },1000)
    this.setState({
    interval : Interval,
    now : 'counting'
    })
  }

  minuteHandler(event){
    this.state.minute >= 60 && event == 1 ? 
      this.setState({
        minute : 60,
        controlTime : 60,
      })
     : this.state.minute <= 1 && event == -1 ? 
      this.setState({
        minute : 1,
        controlTime : 1,
      })
      : this.state.second != 0 ?
      this.setState({
        minute : this.state.controlTime + event,
        controlTime : this.state.controlTime + event,
        second : 0,
      }) :
      this.setState({
        minute : this.state.controlTime + event,
        controlTime : this.state.controlTime + event,
      });
    
  }

 breakHandler(event){
  this.state.breakTime >= 60 && event == 1 ? 
  this.setState({
    breakTime : 60,
  })
 : this.state.breakTime <= 1 && event == -1 ? 
  this.setState({
    breakTime : 1,
  })
  : 
  this.setState({
    breakTime : this.state.breakTime + event,
  });
 }


  render(){
    return(
      <>
      <div className='container'>
        <Button isPlay = {this.state.interval} playAndPause = {this.HandleClick.bind(this)} reset = {this.reset.bind(this)} />
        <Display  minute = {this.state.minute} second = {this.state.second}/>
        <Control  now = {this.state.now} controlTime = {this.state.controlTime} minute = {this.state.minute} minuteHandler = {this.minuteHandler.bind(this)}  break = {this.state.breakTime} breakHandler = {this.breakHandler.bind(this)} />
      </div>
      <p>Coded and Deployed By Norplys</p>
      </>
    )
  }
}

export default App
