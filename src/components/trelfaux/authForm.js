import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useFormInput from '../hooks/useFormInput';

const StyledAuthForm = styled.div`
  form {
    display: grid;
    grid-gap: 1rem;
    label {
      font-size: 1.5rem;
    }
    input {
      font-size: 1rem;
      width: 100%;
      padding: 0.5rem;
    }
    button {
      padding: 1rem;
      width: 100%;
      background-color: ${props => props.theme.yellow};
    }
  }
`;

const AuthForm = ({ user, onSubmitFunction, buttonText }) => {
  const [email, onEmailChange] = useFormInput();
  const [password, onPasswordChange] = useFormInput();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitFunction(email, password);
  };

  return (
    <StyledAuthForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <br />
          <input type="email" id="email" value={email} onChange={onEmailChange} required />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </label>
        {user.error ? <h1 style={{ color: 'red' }}>{user.message}</h1> : null}
        <button type="submit">{buttonText}</button>
      </form>
    </StyledAuthForm>
  );
};

AuthForm.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  onSubmitFunction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AuthForm;
