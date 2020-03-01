import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface ListProps {
	children?: React.ReactNode;
	white?: boolean;
	listHeight?: string;
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

const List = ({ children: items, white, listHeight = 'auto' }: ListProps) => {
	return (
		<StyledList className={cn({ white })} listHeight={listHeight}>
			{items}
		</StyledList>
	);
};

export default List;
