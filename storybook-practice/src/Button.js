import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.color || '#fff'};
  width: ${props => (props.size === 'big' ? '200px' : '100px')};
  height: ${props => (props.size === 'big' ? '80px' : '40px')};
`;

const Button = ({ color, size, text }) => {
  return (
    <StyledButton color={color} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;
