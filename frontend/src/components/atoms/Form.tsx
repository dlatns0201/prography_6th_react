import React, { memo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface FormProps {
	children?: React.ReactNode;
	flexDirection?: 'column' | 'row';
	justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center' | 'stretch';
	alignItems?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center' | 'stretch';
	className?: string;
	[prop: string]: any;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: ${(props: FormProps) => props.justifyContent};
`;

const Form = ({
	children,
	flexDirection = 'column',
	justifyContent = 'flex-start',
	alignItems = 'stretch',
	onSubmit,
	className
}: FormProps) => {
	const classCandidate = [className];
	const needProps = { flexDirection, justifyContent, alignItems };

	return (
		<StyledForm {...needProps} className={cn(classCandidate)} onSubmit={onSubmit}>
			{children}
		</StyledForm>
	);
};

export default memo(Form);
