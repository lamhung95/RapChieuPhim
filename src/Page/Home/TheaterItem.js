import React, { Component } from "react";
import Axios from "axios";

export default class TheaterItem extends Component {

    constructor(props){
        super(props);
        this.state={
            id:""
        }
    }
    

    renderHTML=()=>{
        return Axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
        }).then(rs=>{
            console.log(rs.data)
        }).catch(err=>{
            console.log(err)
        })
    }


  render() {
    return (
      <div>
        <div className="container">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
