import React from 'react';
import styled from 'styled-components';

interface ButtonListProps {
	children?: React.ReactNode;
}

const StyledButtonList = styled.div`
	display: flex;
	flex-direction: row;
`;

const ButtonList = ({ children: buttons }: ButtonListProps) => {
	return <StyledButtonList>{buttons}</StyledButtonList>;
};

export default ButtonList;
