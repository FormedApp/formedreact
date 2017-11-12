import React from 'react';
import { connect } from 'react-redux';

export class AuthenticationCheck extends React.Component {
  static propTypes = {
    currentUser: React.PropTypes.shape({
      id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    }),
    children: React.PropTypes.func.isRequired,
  };

  state = {
    message: null
  };

  componentWillReceiveProps({ currentUser: nextCurrentUser }) {
    const { currentUser } = this.props;
    // if we had an token and it was remove, assume logged out and update message
    this.setState({
      message: ((currentUser || {}).token && !(nextCurrentUser || {}).token) ? 'Session has expired. Please login again.' : null,
    });
  }

  render() {
    const { children, currentUser } = this.props;
    return children({
      ...this.state,
      success: !!(currentUser && currentUser.token)
    });
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(AuthenticationCheck);
