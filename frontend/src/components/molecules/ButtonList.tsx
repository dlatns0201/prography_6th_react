import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import Button from '../atoms/Button';

interface ButtonListProps {
	children?: React.ReactNode;
	data?: ButtonData[];
	className?: string;
}

interface ButtonData {
	id: number;
	description: string;
}

const StyledButtonList = styled.div`
	display: flex;
	flex-direction: row;

	& > * {
		margin-right: 1em;
	}
`;

const ButtonList = ({ children, data = [], className }: ButtonListProps) => {
	const classCandidate = [className];
	const buttons = data.map(v => <Button key={v.id}>{v.description}</Button>);

	return (
		<StyledButtonList className={cn(classCandidate)}>
			{buttons}
			{children}
		</StyledButtonList>
	);
};

export default ButtonList;
