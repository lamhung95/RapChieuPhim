import React, { Component } from "react";
import "./../../SASS/Logout.scss"

class Logout extends Component {
    handleLogout=()=>{
        localStorage.removeItem('user')
        window.location.reload();
    }
  render() {
    return (
      <div className="Logout" onClick={()=>this.handleLogout()}>
        <span type="button" >Đăng Xuất</span>
      </div>
    );
  }
}
export default Logout;