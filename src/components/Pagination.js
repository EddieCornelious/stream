import { Component } from 'react';
import '../styles/Pagination.scss';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { pages: 0, currentActive: '1' };
  }
  scroll(options, callback) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    if (callback) return callback();
  }

  displayPagination = (active) => {
    const pages = [];
    for (let i = 1; i < 11; i++) {
      pages.push(
        <a className={i === this.props.page ? 'active' : ''} id={i} href="#">
          {i}
        </a>
      );
    }
    return pages;
  };

  onPageClick = (e) => {
    if (e.target.localName !== 'a') {
      return;
    }

    e.preventDefault();
    this.props.changePage(e.target.id);

    this.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  render() {
    return (
      <div onClick={this.onPageClick} className="movie__paginator">
        {this.displayPagination()}
      </div>
    );
  }
}
