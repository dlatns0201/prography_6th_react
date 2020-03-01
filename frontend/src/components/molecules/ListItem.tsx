import React from 'react';
import styled from 'styled-components';

interface ListItemProps {
	children?: React.ReactChildren;
}

const StyledListItem = styled.li`
	width: 100%;
`;

const ListItem = ({ children }: ListItemProps) => {
	return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
