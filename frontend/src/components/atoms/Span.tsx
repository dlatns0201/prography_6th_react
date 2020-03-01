import React from 'react';
import styled from 'styled-components';

const fontSizeType = {
	small: '1.0rem',
	normal: '1.2rem',
	big: '1.4rem',
	title: '2.0rem'
} as const;

interface SpanProps {
	children: React.ReactChildren;
	color?: string;
	fontSize?: 'small' | 'normal' | 'big' | 'title' | number;
	textAlign?: 'left' | 'right' | 'center';
}

const StyledSpan = styled.span`
	color: ${(props: SpanProps) => props.color || 'black'};
	font-size: ${(props: SpanProps) =>
		typeof props.fontSize === 'number' ? `${props.fontSize}rem` : fontSizeType[props.fontSize!]};
	text-align: ${(props: SpanProps) => props.textAlign};
`;

const Span = ({ children, color, fontSize, textAlign }: SpanProps) => {
	return (
		<StyledSpan color={color} fontSize={fontSize} textAlign={textAlign}>
			{children}
		</StyledSpan>
	);
};

export default Span;
