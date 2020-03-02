import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface ButtonProps {
	children?: React.ReactNode;
	flex?: number | 'auto';
	color?: string;
	size?: 'small' | 'normal' | 'big';
	type?: 'route' | 'button';
	url?: string;
	outline?: string;
	bgColor?: string;
	transparent?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledButton = styled.button<ButtonProps>`
	flex: ${(props: ButtonProps) => props.flex};
	display: flex;
	align-items: stretch;
	border-radius: 3.7px;
	border: ${(props: ButtonProps) => (props.outline === 'none' ? 'none' : `0.7px solid ${props.outline}`)};
	background: ${(props: ButtonProps) => (props.transparent ? 'transparent' : props.bgColor)};
	color: ${(props: ButtonProps) => props.color};
	cursor: pointer;

	&.small {
		padding: 7px 7px;
		font-size: 1rem;
	}
	&.normal {
		padding: 10px 10px;
		font-size: 1.2rem;
	}
	&.big {
		padding: 14px 14px;
		font-size: 1.4rem;
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;
`;

const Button = ({
	children,
	flex = 'auto',
	color = 'black',
	outline = 'black',
	bgColor = 'white',
	transparent = false,
	size = 'normal',
	type = 'button',
	url
}: ButtonProps) => {
	const classCandidate = [size];

	const RealButton = (
		<StyledButton flex={flex} color={color} size={size} className={cn(classCandidate)}>
			{children}
		</StyledButton>
	);
	const RealLink = (
		<StyledLink to={url!}>
			<StyledButton
				flex={flex}
				color={color}
				size={size}
				className={cn(classCandidate)}
				outline={outline}
				bgColor={bgColor}
				transparent={transparent}
			>
				{children}
			</StyledButton>
		</StyledLink>
	);
	return type === 'route' && url ? RealLink : RealButton;
};

export default Button;
