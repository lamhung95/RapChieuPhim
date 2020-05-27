import React, { Component } from "react";
import "./../../SASS/Search-film.scss";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-form">
        <div className="input-group">
          <input
            type="text"
            className="form-control search-content"
            placeholder="Tìm phim..."
          />
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit"></button>
          </div>
        </div>
      </div>
    );
  }
}
