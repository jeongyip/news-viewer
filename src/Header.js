import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  box-sizing: border-box;
  padding: 3.5rem;
  width: 100%
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.div`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  font-family: "Courier New";
  background-color: #ff8787;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Title>Today NEWS</Title>
      </HeaderDiv>
    );
  }
}

export default Header;
