import React, { Component, Fragment } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.SetAlert(' Please enter Something', 'light');
    } else {
      this.props.SearchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onClick = (e) => {
    this.props.ClearUsers();
    this.setState({ text: '' });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            className='form-text'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button className='btn btn-light btn-block' onClick={this.onClick}>
            Clear Search
          </button>
        )}
      </Fragment>
    );
  }
}

export default Search;
