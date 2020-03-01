import React from 'react';
import styled from 'styled-components';

interface SpanProps {
	children?: React.ReactChild;
	color?: string;
	fontSize?: string;
	textAlign?: 'left' | 'right' | 'center';
	width?: string;
	height?: string;
	className?: string;
}

const StyledSpan = styled.span<SpanProps>`
	color: ${(props: SpanProps) => props.color || 'black'};
	font-size: ${(props: SpanProps) => props.fontSize};
	text-align: ${(props: SpanProps) => props.textAlign};
	width: ${props => props.width};
	height: ${props => props.height};
`;

const Span = ({
	children,
	color = 'inherit',
	fontSize = 'inherit',
	textAlign = 'left',
	width = 'auto',
	height = 'auto',
	className
}: SpanProps) => {
	return (
		<StyledSpan
			color={color}
			fontSize={fontSize}
			textAlign={textAlign}
			width={width}
			height={height}
			className={className}
		>
			{children}
		</StyledSpan>
	);
};

export default Span;
