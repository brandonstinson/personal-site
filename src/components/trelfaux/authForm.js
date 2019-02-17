import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useFormInput from '../hooks/useFormInput';

const StyledAuthForm = styled.div`
  form {
    display: grid;
    grid-gap: 1rem;
    label,
    input {
      font-size: 1.5rem;
    }
    button {
      justify-self: center;
      padding: 1rem;
    }
  }
`;

const AuthForm = ({ user, onSubmitFunction }) => {
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
        <button type="submit">Submit</button>
      </form>
    </StyledAuthForm>
  );
};

AuthForm.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  onSubmitFunction: PropTypes.func.isRequired,
};

export default AuthForm;
