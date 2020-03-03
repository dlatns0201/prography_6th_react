import React, { memo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import Span from '../atoms/Span';

interface TitleProps {
	children?: React.ReactChild;
	color?: string;
	fontSize?: string;
	className?: string;
}

const StyledTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	padding: 1em 0;
	color: ${props => props.color};
`;

const Title = ({ children, color = 'inherit', className }: TitleProps) => {
	const needProps = {
		color
	};
	const classCandidate = [className];

	return (
		<StyledTitle {...needProps} className={cn(classCandidate)}>
			<Span width="100%" textAlign="center" size="title">
				{children}
			</Span>
		</StyledTitle>
	);
};

export default memo(Title);
