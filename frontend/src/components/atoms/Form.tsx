import React from 'react';
import styled from 'styled-components';

interface FormProps {
	children: React.ReactChildren;
}

const StyledForm = styled.form``;

const Form = ({ children }: FormProps) => {
	return <StyledForm>{children}</StyledForm>;
};

export default Form;
