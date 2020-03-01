import React from 'react';
import styled from 'styled-components';
import Title from '../molecules/Title';

interface TodoContentProps {}

const StyledTodoContent = styled.div`
	min-width: 60%;
`;

const TodoContent = () => {
	return (
		<StyledTodoContent>
			<Title color="#FDA7DF">Todos</Title>
		</StyledTodoContent>
	);
};

export default TodoContent;
