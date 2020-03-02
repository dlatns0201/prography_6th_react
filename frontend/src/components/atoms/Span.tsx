import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface SpanProps {
	children?: React.ReactChild;
	color?: string;
	textAlign?: 'left' | 'right' | 'center';
	width?: string;
	size?: 'small' | 'normal' | 'big' | 'title';
	className?: string | object;
}

const StyledSpan = styled.span<SpanProps>`
	color: ${(props: SpanProps) => props.color || 'black'};
	text-align: ${(props: SpanProps) => props.textAlign};
	width: ${props => props.width};

	&.small {
		padding: 0.5em 0.3em;
		font-size: 1rem;
	}
	&.normal {
		padding: 0.7em 0.5em;
		font-size: 1.2rem;
	}
	&.big {
		padding: 1em 0.9em;
		font-size: 1.2rem;
	}
	&.title {
		padding: 1.3em 1.84em;
		font-size: 2.5rem;
	}
`;

const Span = ({
	children,
	color = 'inherit',
	textAlign = 'left',
	width = 'auto',
	size = 'normal',
	className
}: SpanProps) => {
	const classCandiate = [className];
	classCandiate.push(size);

	return (
		<StyledSpan color={color} textAlign={textAlign} width={width} size={size} className={cn(classCandiate)}>
			{children}
		</StyledSpan>
	);
};

export default Span;
