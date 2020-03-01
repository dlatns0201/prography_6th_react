import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
	children?: React.ReactNode;
	flex?: number | 'auto';
	color?: string;
	size?: 'small' | 'normal' | 'big';
	type: 'route' | 'button';
	url: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Size = {
	small: ['7px', '7px', '1rem'],
	normal: ['10px', '10px', '1.2rem'],
	big: ['14px', '14px', '1.4rem']
} as const;

const StyledButton = (styled.button`
	border: none;
	background-color: transparent;
	flex: ${(props: ButtonProps) => props.flex};
	color: ${(props: ButtonProps) => props.color};
	${(props: ButtonProps) => css`
		padding: ${Size[props.size!][0]} ${Size[props.size!][1]};
		font-size: ${Size[props.size!][2]};
	`}
	cursor: pointer;

	.route {
		text-decoration: none;
		color: black;
	}
` as unknown) as any;

interface IInnerContent {
	type: 'route' | 'button';
	children: React.ReactNode;
	url: string;
}

const innerContent = ({ type, children, url }: IInnerContent): React.ReactNode => {
	if (type === 'route')
		return (
			<Link to={url} className="route">
				{children}
			</Link>
		);
	if (type === 'button') return children;
	return null;
};
const Button = ({ children, flex = 'auto', color = 'black', size = 'normal', type = 'button', url }: ButtonProps) => {
	return (
		<StyledButton flex={flex} color={color} size={size}>
			{innerContent({ type, children, url })}
		</StyledButton>
	);
};

export default Button;
