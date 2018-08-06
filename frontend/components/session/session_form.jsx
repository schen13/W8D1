import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const buttonTxt = (this.props.formType === 'login' ? 'Log In' : 'Sign Up');
    const linkUrl = (this.props.formType === 'login' ? 'signup' : 'login');
    return (
      <div className="session-form-container">
        <h3 >{buttonTxt}</h3>
        <br/>
        <Link to={`/${linkUrl}`}>{`${linkUrl} instead`}</Link>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="session-form">
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="session-input">
            </input>
          </label>
          <br/>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="session-input">
            </input>
          </label>
          <br/>
          <input
            type="submit"
            value={this.props.formType}
            className="session-submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
