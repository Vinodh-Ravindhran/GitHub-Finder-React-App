import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      login,
      name,
      avatar_url,
      location,
      bio,
      blog,
      hireable,
    } = this.props.user;

    return this.props.loading ? (
      <Spinner />
    ) : (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search{' '}
        </Link>
        Hireable :{' '}
        {hireable ? (
          <i className='text-success fa fa-check' />
        ) : (
          <i className='text-danger fa fa-times-circle' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt={name}
              className='round-img my-1'
              style={{ width: '100px' }}
            />
            <h3>{login}</h3>
            <h3>{location}</h3>
          </div>
          <div>
            <p>
              <strong> Bio : </strong> {bio}
            </p>
            <p>
              <strong className='text-primary'> Blog : </strong> {blog}
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
