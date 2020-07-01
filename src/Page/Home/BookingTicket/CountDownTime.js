import React, { Component } from "react";
import "./../../../SASS/CountDownTime.scss"

export default class CountDownTime extends Component {
  state = {
    minutes: 20,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if(minutes ===0 && seconds ===0){
        window.location.reload();
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className="countDownTime">
        {minutes === 0 && seconds === 0 ? (
          alert("Hết thời gian giữ ghế!!!")
        ) : (
          <span>
            <p className="title-time">Thời gian giữ ghế</p>
            <p className="count-time">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
          </span>
        )}
      </div>
    );
  }
}
