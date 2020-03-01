import React from 'react';
import styled from 'styled-components';

interface InputProps {
	children: React.ReactChildren;
}

const StyledInput = styled.span``;

const Input = ({ children }: InputProps) => {
	return <StyledInput>{children}</StyledInput>;
};

export default Input;
