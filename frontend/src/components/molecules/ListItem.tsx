import React from 'react';
import styled from 'styled-components';

interface ListItemProps {
	children: React.ReactChildren;
}

const StyledListItem = styled.li``;

const ListItem = ({ children }: ListItemProps) => {
	return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
