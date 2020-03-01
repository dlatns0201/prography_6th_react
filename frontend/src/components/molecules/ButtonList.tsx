import React from 'react';
import styled from 'styled-components';

interface ButtonListProps {
	children: React.ReactChildren;
}

const StyledButtonList = styled.div``;

const ButtonList = ({ children }: ButtonListProps) => {
	return <StyledButtonList>{children}</StyledButtonList>;
};

export default ButtonList;
