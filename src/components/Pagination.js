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

  onPageClick = (e) => {
    if (e.target.localName !== 'a') {
      return;
    }

    e.preventDefault();
    console.log(this.state);
    document
      .getElementById(this.state.currentActive)
      .classList.remove('active');
    this.setState({ currentActive: e.target.id }, function (state) {
      e.target.classList.add('active');
    });

    this.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  render() {
    return (
      <div onClick={this.onPageClick} className="movie__paginator">
        <a className="active" id="1" href="#">
          1
        </a>
        <a id="2" href="#">
          1
        </a>
        <a id="3" href="#">
          1
        </a>
        <a id="4" href="#">
          1
        </a>
        <a id="5" href="#">
          1
        </a>
        <a id="5" href="#">
          1
        </a>
      </div>
    );
  }
}
