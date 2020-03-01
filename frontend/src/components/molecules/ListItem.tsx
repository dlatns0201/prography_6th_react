import React from 'react';
import styled from 'styled-components';

interface ListItemProps {
	children?: React.ReactNode;
}

const StyledListItem = styled.li`
	width: 100%;
	padding: 0 1.5em;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid lightgray;
`;

const ListItem = ({ children }: ListItemProps) => {
	return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
