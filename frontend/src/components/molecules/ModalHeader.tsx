import React from 'react';
import styled from 'styled-components';

interface ModalHeaderProps {
	children?: React.ReactNode;
}

const StyledHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const ModalHeader = ({ children }: ModalHeaderProps) => {
	return <StyledHeader>{children}</StyledHeader>;
};

export default ModalHeader;
