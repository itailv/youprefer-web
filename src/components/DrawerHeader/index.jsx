import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DrawerHeaderWrapper = styled.div`
  width: 100%;
  height: ${props => props.height || '160px'};
  display: block;
  position: relative;
  overflow: hidden;
`;

const DrawerHeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: skew(30deg, 0) scale(1.5);

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
  }

  &::before {
    background-color: #2196f3;
    left: 0;
  }

  &::after {
    background-color: #f44336;
    right: 0;
  }
`;

const QuestionCircleImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;

const DrawerHeaderRibbon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  background-color: #990000;
  transform: rotate(-45deg) translate(-25%, -50%);
  padding: 10px 50px;
  color: #ffffff;
`;

const DrawerHeader = ({ height }) => (
  <DrawerHeaderWrapper height={height}>
    <DrawerHeaderBackground />
    <QuestionCircleImg src="assets/img/question_circle.png" alt="logo" />

    <DrawerHeaderRibbon>BETA</DrawerHeaderRibbon>
  </DrawerHeaderWrapper>
);

DrawerHeader.propTypes = {
  height: PropTypes.string,
};

DrawerHeader.defaultProps = {
  height: '160px',
};

export default DrawerHeader;
