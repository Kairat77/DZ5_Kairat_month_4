import React  from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isRunning: false,
        elapsedTime: 0
      };
    }
  
    handleStartStop = () => {
      this.setState(prevState => ({ isRunning: !prevState.isRunning }));
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (this.state.isRunning !== prevState.isRunning) {
        if (this.state.isRunning) {
          this.interval = setInterval(() => {
            this.setState(prevState => ({ elapsedTime: prevState.elapsedTime + 1 }));
          }, 1000);
        } else {
          clearInterval(this.interval);
        }
      }
    }
  
    render() {
      const { isRunning, elapsedTime } = this.state;
  
      return (
        <div>
          <button onClick={this.handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
          <div>{elapsedTime}</div>
        </div>
      );
    }
  }
  export default Timer
  