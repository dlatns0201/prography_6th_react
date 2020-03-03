import React from 'react';
import styled from 'styled-components';

import Header from '../molecules/ModalHeader';
import Dialog from '../molecules/ModalDialog';
import Footer from '../molecules/ModalFooter';

interface ModalProps {
	header?: React.ReactNode;
	dialog: React.ReactNode;
	footer?: React.ReactNode;
}

const StyledModal = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: gray;
	opacity: 0.6;
	z-index: 1;
`;

const StyledWrapper = styled.div`
	width: 500px;
	background-color: white;
	border-radius: 4px;
	opacity: 0.8;
	z-index: 2;
`;

const Modal = ({ header, dialog, footer }: ModalProps) => {
	return (
		<StyledModal>
			<StyledWrapper>
				{header ? <Header>{header}</Header> : null}
				<Dialog>{dialog}</Dialog>
				{footer ? <Footer>{footer}</Footer> : null}
			</StyledWrapper>
		</StyledModal>
	);
};

export default Modal;
