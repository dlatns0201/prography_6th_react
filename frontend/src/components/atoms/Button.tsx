import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
	children: React.ReactChildren;
}

const StyledButton = styled.button``;

const Button = ({ children }: ButtonProps) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
