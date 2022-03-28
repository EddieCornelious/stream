import "../styles/Header.scss";
import React from "react";

const DropDown = props => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-default dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Sort By
      </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li onClick={() => props.sortData("desc")}>
          <a href="#">Most Viewed</a>
        </li>
        <li onClick={() => props.sortData("asc")}>
          <a href="#">Least Viewed</a>
        </li>
      </ul>
    </div>
  );
};

class GameSearchBar extends React.Component {
  handleChange(e) {
    this.props.filterData(e.target.value);
  }
  render() {
    return (
      <input
        onChange={this.handleChange.bind(this)}
        className="header__search"
        type="text"
        placeholder="Search Games"
      />
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="brand">
            <em>Dashboard Box</em>
          </div>

          <form className="search__form">
            <GameSearchBar filterData={this.props.filterData} />

            <button className="search__btn" type="submit">
              <i className="fa fa-search">&nbsp;</i>
            </button>
          </form>
          <DropDown sortData={this.props.sortData} />
        </div>
      </div>
    );
  }
}

export default Header;
