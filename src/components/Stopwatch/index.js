import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const mins = Math.floor(timerElapsedInSeconds / 60)

    const stringifiedMins = mins < 10 ? `0${mins}` : mins

    return stringifiedMins
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const secs = Math.floor(timerElapsedInSeconds % 60)

    const stringifiedSecs = secs < 10 ? `0${secs}` : secs

    return stringifiedSecs
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerElapsedInSeconds: 0})
  }

  render() {
    const {isTimerRunning, timerElapsedInSeconds} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-cont">
        <div className="main-cont">
          <h1 className="txt-stopwatch">Stopwatch</h1>
          <div className="app-cont">
            <div className="img-timer-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="logo"
                alt="stopwatch"
              />
              <p className="txt-timer">Timer</p>
            </div>
            <h1>{time}</h1>
            <div className="buttons-cont">
              <button
                type="button"
                className="btn btn-start"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn-stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn btn-reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
