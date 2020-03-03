import React, { memo } from 'react';
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
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledButton = styled.button<ButtonProps>`
	flex: ${(props: ButtonProps) => props.flex};
	display: flex;
	justify-content: center;
	align-items: stretch;
	border-radius: 3.7px;
	border: ${(props: ButtonProps) => (props.outline === 'none' ? 'none' : `0.7px solid ${props.outline}`)};
	background: ${(props: ButtonProps) => (props.transparent ? 'transparent' : props.bgColor)};
	color: ${(props: ButtonProps) => props.color};
	cursor: pointer;
	outline: none;

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
	url,
	className
}: ButtonProps) => {
	const classCandidate = [size, className];
	const commonProps = {
		flex,
		color,
		size,
		outline,
		bgColor,
		transparent
	};

	const RealButton = (
		<StyledButton {...commonProps} className={cn(classCandidate)}>
			{children}
		</StyledButton>
	);
	const RealLink = (
		<StyledLink to={url!}>
			<StyledButton {...commonProps} className={cn(classCandidate)}>
				{children}
			</StyledButton>
		</StyledLink>
	);

	return type === 'route' && url ? RealLink : RealButton;
};

export default memo(Button);
