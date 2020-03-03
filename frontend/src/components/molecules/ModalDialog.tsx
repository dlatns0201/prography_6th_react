import React from 'react';
import styled from 'styled-components';

interface DialogProps {
	children?: React.ReactNode;
}

const StyledDialog = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: space-evenly;
`;

const ModalDialog = ({ children }: DialogProps) => {
	return <StyledDialog>{children}</StyledDialog>;
};

export default ModalDialog;
