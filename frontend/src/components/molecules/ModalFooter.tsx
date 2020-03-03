import React from 'react';
import styled from 'styled-components';

interface ModalFooterProps {
	children?: React.ReactNode;
}

const StyledFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: space-evenly;
`;

const ModalFooter = ({ children }: ModalFooterProps) => {
	return <StyledFooter>{children}</StyledFooter>;
};

export default ModalFooter;
