import React from 'react'
import './App.scss'
import Button from './assets/component/button';
import Display from './assets/component/display';
import Control from './assets/component/control';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      breakTime : 0,
      controlTime : 0,
      minuteControl : 0,
      minute : 1,
      second : 0,
      interval : 0,
    }
  }
  componentDidUpdate(np,ns){
    if(this.state.second < 0 && this.state.interval && this.state.minute != 0){
      this.setState({
        minute : this.state.minute - 1,
        second : 60,
      });
    }
    if(this.state.second === 0 && this.state.minute === 0 && this.state.interval){
      clearInterval(this.state.interval);
      this.setState({
        interval : 0,
      });
    }
  }
  HandleClick(){
    if(this.state.interval){
      clearInterval(this.state.interval);
      this.setState({
        interval : 0,
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
    })
  }

  controlMinute(){
    this.setState({
      controlTime : this.state.minute
    });
  }
  minuteUp(){
    this.state.minute >= 60 ? this.setState({minute : 60}) : 
    this.setState({
      minute : this.state.minute + 1,
    });
  };

  minuteDown(){
  if(this.state.minute <= 0){
    this.setState({
      minute : 0,
    });
  } else {
    this.setState({
      minute : this.state.minute - 1,
    })}
    ;
  };

  breakUp(){
    this.state.breakTime >= 60 ? this.setState({breakTime : 60}) : 
    this.setState({
      breakTime : this.state.breakTime + 1,
    });
  }

  breakDown(){
    if(this.state.breakTime <= 0){
      this.setState({
        breakTime  : 0,
      })
    } else{
    this.setState({
      breakTime : this.state.breakTime - 1,
    })
  };
  }

  render(){
    return(
      <div className='container'>
        <Button isPlay = {this.state.interval} playAndPause = {this.HandleClick.bind(this)} />
        <Display  minute = {this.state.minute} second = {this.state.second}/>
        <Control control = {this.controlMinute.bind(this)} controlTime = {this.state.controlTime} minute = {this.state.minute} minuteUp = {this.minuteUp.bind(this)}  minuteDown = {this.minuteDown.bind(this)} break = {this.state.breakTime} breakDown = {this.breakDown.bind(this)} breakUp = {this.breakUp.bind(this)}/>
      </div>
    )
  }
}

export default App
