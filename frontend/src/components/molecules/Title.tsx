import React from 'react';
import styled from 'styled-components';

import Span from '../atoms/Span';

interface TitleProps {
	children?: React.ReactChild;
	color?: string;
	fontSize?: string;
}

const StyledTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	padding: 1em 0;
	color: ${props => props.color};
`;

const Title = ({ children, color = 'inherit' }: TitleProps) => {
	return (
		<StyledTitle color={color}>
			<Span width="100%" textAlign="center" size="title">
				{children}
			</Span>
		</StyledTitle>
	);
};

export default Title;
