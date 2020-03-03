import React, { memo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface ListProps {
	children?: React.ReactNode;
	white?: boolean;
	listHeight?: string;
	className?: string;
}

const StyledList = styled.ul<ListProps>`
	display: flex;
	flex-direction: column;
	width: 100%;

	&.white {
		background-color: white;
	}

	& > * {
		height: ${props => props.listHeight};
	}
`;

const List = ({ children, white, listHeight = 'auto', className }: ListProps) => {
	const needProps = {
		listHeight
	};
	const classCandidate = [className];

	return (
		<StyledList {...needProps} className={cn([classCandidate, { white }])}>
			{children}
		</StyledList>
	);
};

export default memo(List);
