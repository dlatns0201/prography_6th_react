import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface ListProps {
	children?: React.ReactNode;
	white?: boolean;
}

const StyledList = styled.ul<ListProps>`
	display: flex;
	flex-direction: column;
	width: 100%;

	&.white {
		background-color: white;
	}
`;

const List = ({ children: items, white }: ListProps) => {
	return <StyledList className={cn({ white })}>{items}</StyledList>;
};

export default List;
