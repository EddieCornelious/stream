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
        Dropdown
      </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li>
          <a href="#">Action</a>
        </li>
        <li>
          <a href="#">Another action</a>
        </li>
        <li>
          <a href="#">Something else here</a>
        </li>
        <li role="separator" className="divider" />
        <li>
          <a href="#">Separated link</a>
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
          <h1 className="brand">Dashboard Box</h1>

          <form className="search__form">
            <GameSearchBar filterData={this.props.filterData} />

            <button className="search__btn" type="submit">
              <i className="fa fa-search">&nbsp;</i>
            </button>
          </form>
          <DropDown />
        </div>
      </div>
    );
  }
}

export default Header;
