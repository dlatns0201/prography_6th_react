import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface InputProps {
	children?: React.ReactChildren;
	placeholder?: string;
	blockWidth?: boolean;
	size?: 'small' | 'normal' | 'big';
	monopoly?: boolean;
	className?: string;
}

const StyledInput = styled.input<InputProps>`
	display: inline-block;
	border: 0.3px solid lightgray;

	&.small {
		min-height: 1.3em;
		font-size: 1rem;
		padding: 0.9em 1.2em;
	}
	&.normal {
		min-height: 1.8em;
		font-size: 1.2rem;
		padding: 0.7em 1.2em;
	}
	&.big {
		min-height: 2.1em;
		font-size: 1.8rem;
		padding: 0.26em 1.2em;
	}
`;

const Input = ({ children, placeholder, size = 'normal', className }: InputProps) => {
	const classCandiate = [size, className];
	const needProps = {
		placeholder
	};

	return (
		<StyledInput {...needProps} className={cn(classCandiate)}>
			{children}
		</StyledInput>
	);
};

export default Input;
