import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'shared/components/label/label';
import styles from './formPassword.css';

class FormPassword extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isValid: true
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
    this.validate(event.target.value);
  }

  validate = (text) => {
    // todo: update regex if/when we decide to update password validation rules
    const validationRegex = /^(?=.*[A-Z]).{6,}$/;

    if (text.length > 0) {
      this.setState({ isValid: text.match(validationRegex) });
    } else {
      this.setState({ isValid: true });
    }
  }

  render() {
    return (
      <div className={styles.formPassword}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.displayName}</Label>}
        <input
          id={this.props.id}
          type="password"
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        { !this.state.isValid && <span>Must be 6 characters long and incude a capitalized letter</span>}
      </div>
    );
  }
}

FormPassword.propTypes = {
  label: PropTypes.bool,
  displayName: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired
};

FormPassword.defaultProps = {
  displayName: null,
  label: true,
  placeholder: null
};

export default FormPassword;
