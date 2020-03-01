import React from 'react';
import styled from 'styled-components';

import Span from '../atoms/Span';

interface TitleProps {
	children?: React.ReactChild;
	color?: string;
}

const StyledTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
`;

const Title = ({ children, color = 'inherit' }: TitleProps) => {
	return (
		<StyledTitle color={color}>
			<Span width="100%" textAlign="center">
				{children}
			</Span>
		</StyledTitle>
	);
};

export default Title;
