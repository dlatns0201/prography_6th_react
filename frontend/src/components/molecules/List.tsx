import React from 'react';
import styled from 'styled-components';

interface ListProps {
	children: React.ReactChildren;
}

const StyledList = styled.ul``;

const List = ({ children }: ListProps) => {
	return <StyledList>{children}</StyledList>;
};

export default List;
