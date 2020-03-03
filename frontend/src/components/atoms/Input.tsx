import React, { useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface InputProps {
	children?: React.ReactChildren;
	type?: 'text' | 'password' | 'email';
	placeholder?: string;
	size?: 'small' | 'normal' | 'big';
	name?: string;
	className?: string;
	value?: string;
	setValue?: React.Dispatch<React.SetStateAction<string>>;
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
		padding: 0.7em 1.5em;
	}
	&.big {
		min-height: 2.1em;
		font-size: 1.8rem;
		padding: 0.26em 1.2em;
	}
`;

const Input = ({
	children,
	placeholder,
	size = 'normal',
	className,
	type = 'text',
	name,
	value = '',
	setValue
}: InputProps) => {
	const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue!(e.target.value);
	}, []);

	const classCandiate = [size, className];
	const needProps = {
		placeholder,
		type,
		name,
		value
	};

	return (
		<StyledInput {...needProps} className={cn(classCandiate)} onChange={onChangeInput}>
			{children}
		</StyledInput>
	);
};

export default Input;
