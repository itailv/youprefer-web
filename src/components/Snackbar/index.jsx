import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Button from '../Button';

const snackbarEnterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 100%);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const snackbarEnterAnimationMobile = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: fixed;
  bottom: 0;
  left: 50%;

  padding: 0 24px;

  min-width: 568px;

  opacity: ${props => (props.loaded ? 1 : 0)};
  transform: ${props => (props.loaded ? 'translate(-50%, 0)' : 'translate(-50%, 100%)')};

  background-color: #323232;

  animation: ${snackbarEnterAnimation} 200ms cubic-bezier(0, 0, .2, 1)
    ${props => !props.loaded && 'reverse'};

  /* Full width on mobile */
  @media (max-width: 768px) {
    left: 0;
    right: 0;

    min-width: auto;
    transform: ${props => (props.loaded ? 'none' : 'translateY(100%)')};

    animation: ${snackbarEnterAnimationMobile} 200ms cubic-bezier(0, 0, .2, 1)
      ${props => !props.loaded && 'reverse'};
  }

  & span {
    display: flex;
    align-items: center;

    margin-left: auto;
    margin-right: 0;

    font-size: 0.875rem;
    height: 48px;
  }
`;

const Snackbar = ({ message, action, loaded }) => (
  <Wrapper loaded={loaded}>
    <span>{message}</span>

    {action.text && (
      <Button onClick={action.callback} compact>
        {action.text}
      </Button>
    )}
  </Wrapper>
);

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  action: PropTypes.shape({
    text: PropTypes.string,
    callback: PropTypes.func,
  }),
  loaded: PropTypes.bool,
};

Snackbar.defaultProps = {
  action: {},
  loaded: true,
};

export default Snackbar;
