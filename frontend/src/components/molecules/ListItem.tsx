import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface ListItemProps {
	children?: React.ReactNode;
	hr?: boolean;
	className?: string;
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

const ListItem = ({ children, hr = false, className }: ListItemProps) => {
	const classCandidate = [className];

	return <StyledListItem className={cn([classCandidate, { hr }])}>{children}</StyledListItem>;
};

export default ListItem;
