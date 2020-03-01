import React from 'react';
import styled from 'styled-components';

interface TodoContentProps {
	children?: React.ReactChildren;
}

const StyledTodoContent = styled.div`
	min-width: 50%;
`;

const TodoContent = ({ children }: TodoContentProps) => {
	return <StyledTodoContent>{children}</StyledTodoContent>;
};

export default TodoContent;
