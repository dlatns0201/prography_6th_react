import React from 'react';
import styled from 'styled-components';

interface ListProps {
	children?: React.ReactChildren;
}

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const List = ({ children: items }: ListProps) => {
	return <StyledList>{items}</StyledList>;
};

export default List;
