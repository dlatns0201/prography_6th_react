import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
	children?: React.ReactChildren;
	flex?: number | 'auto';
	color?: string;
	size?: 'small' | 'normal' | 'big';
}

const Size = {
	small: ['7px', '7px', '1rem'],
	normal: ['10px', '10px', '1.2rem'],
	big: ['14px', '14px', '1.4rem']
} as const;

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	flex: ${(props: ButtonProps) => props.flex};
	color: ${(props: ButtonProps) => props.color};
	${(props: ButtonProps) => css`
		padding: ${Size[props.size!][0]} ${Size[props.size!][1]};
		font-size: ${Size[props.size!][2]};
	`}
`;

const Button = ({ children, flex = 'auto', color = 'black', size = 'normal' }: ButtonProps) => {
	return (
		<StyledButton flex={flex} color={color} size={size}>
			{children}
		</StyledButton>
	);
};

export default Button;
