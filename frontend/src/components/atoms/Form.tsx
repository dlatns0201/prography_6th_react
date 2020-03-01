import React from 'react';
import styled from 'styled-components';

interface FormProps {
	children?: React.ReactNode;
	flexDirection?: 'column' | 'row';
	justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center';
	alignItems?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center';
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: ${(props: FormProps) => props.justifyContent};
`;

const Form = ({
	children,
	flexDirection = 'row',
	justifyContent = 'flex-start',
	alignItems = 'flex-start',
	onSubmit
}: FormProps) => {
	return (
		<StyledForm
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			onSubmit={onSubmit}
		>
			{children}
		</StyledForm>
	);
};

export default Form;
