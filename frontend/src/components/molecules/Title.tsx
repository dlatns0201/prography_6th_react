import React from 'react';
import styled from 'styled-components';

interface InputProps {
	children: React.ReactChildren;
	placeholder: string;
}

const StyledInput = styled.div``;

const Input = ({ children, placeholder }: InputProps) => {
	return <StyledInput placeholder={placeholder}>{children}</StyledInput>;
};

export default Input;
