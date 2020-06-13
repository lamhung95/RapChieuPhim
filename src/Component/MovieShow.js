import React, { Component } from "react";

class MovieShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCinema: [],
    };
  }
  setIdCinema = () => {
    const getID = this.props.cinema.maCumRap;
    // console.log(getID)
    this.setState({
      idCinema: getID,
    });
    // console.log(this.state)
  };
  render() {
    const { cinema } = this.props;
    // console.log(this.state);
    return (
      <div
        className="address-content"
        onClick={() => {
          this.setIdCinema();
        }}
      >
        <b className="name-cinema">{cinema.tenCumRap}</b>
        <p className="address-cinema">{cinema.diaChi}</p>
        {/* <NavLink> */}
        <span>[Chi tiết]</span>
        {/* </NavLink> */}
      </div>
    );
  }
}
export default MovieShow;
