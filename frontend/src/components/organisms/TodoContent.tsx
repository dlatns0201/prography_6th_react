import React from 'react';
import styled from 'styled-components';
import Title from '../molecules/Title';
import Form from '../atoms/Form';
import List from '../molecules/List';
import Input from '../atoms/Input';
import ListItem from '../molecules/ListItem';

interface TodoContentProps {}

const StyledTodoContent = styled.div`
	min-width: 40vw;
	display: flex;
	flex-direction: column;
`;

const TodoContent = () => {
	return (
		<StyledTodoContent>
			<Title color="#FDA7DF" fontSize="3rem">
				Todos
			</Title>
			<Form flexDirection="column">
				<Input placeholder="무엇을 해야하나요?" todo />
			</Form>
			<List white>
				<ListItem>abc</ListItem>
				<ListItem>123</ListItem>
			</List>
		</StyledTodoContent>
	);
};

export default TodoContent;
