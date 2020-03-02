import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface ListItemProps {
	children?: React.ReactNode;
	hr?: boolean;
}

const StyledListItem = styled.li<ListItemProps>`
	width: 100%;
	padding: 0 1.5em;
	box-sizing: border-box;
	display: flex;
	align-items: center;

	&.hr {
		border-bottom: 0.5px solid lightgray;
	}
`;

const ListItem = ({ children, hr = false }: ListItemProps) => {
	const classCandidate = [];
	if (hr) classCandidate.push('hr');
	return <StyledListItem className={cn(classCandidate)}>{children}</StyledListItem>;
};

export default ListItem;
