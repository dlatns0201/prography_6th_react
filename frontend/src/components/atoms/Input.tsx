import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface InputProps {
	children?: React.ReactChildren;
	placeholder?: string;
	todo?: boolean;
}

const StyledInput = styled.input<InputProps>`
	display: inline-block;
	flex: 1;
	border: 0.3px solid lightgray;

	&.todo {
		flex-grow: 1;
		min-height: 2.3em;
		font-size: 1.8rem;
		padding: 0 1em;
		border-left: none;
		border-right: none;
	}
`;

const Input = ({ children, placeholder, todo }: InputProps) => {
	return (
		<StyledInput className={cn({ todo })} placeholder={placeholder}>
			{children}
		</StyledInput>
	);
};

export default Input;
