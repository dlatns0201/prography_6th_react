import React from 'react';
import styled from 'styled-components';

import Span from '../atoms/Span';

interface TitleProps {
	children?: React.ReactChild;
	color?: string;
}

const StyledTitle = styled.div`
	width: 100%;
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
