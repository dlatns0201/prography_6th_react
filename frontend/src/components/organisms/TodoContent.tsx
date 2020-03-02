import React from 'react';
import styled from 'styled-components';
import Title from '../molecules/Title';
import Form from '../atoms/Form';
import List from '../molecules/List';
import Input from '../atoms/Input';
import ListItem from '../molecules/ListItem';
import Span from '../atoms/Span';
import ButtonList from '../molecules/ButtonList';
import Button from '../atoms/Button';

interface TodoContentProps {}

const StyledTodoContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;

	.todo-description {
		font-size: 1.2rem;
	}

	.todo-buttons {
		margin-left: auto;
	}
`;

const TodoContent = () => {
	return (
		<StyledTodoContent>
			<Title color="#FDA7DF">Todos</Title>
			<Form flexDirection="column">
				<Input placeholder="무엇을 해야하나요?" />
			</Form>
			<List white listHeight="66px">
				<ListItem hr>
					<Span className="todo-description">Server Side Rendering</Span>
					<ButtonList className="todo-buttons">
						<Button color="blue" outline="none" transparent>
							수정
						</Button>
						<Button color="#FDA7DF" outline="none" transparent>
							삭제
						</Button>
					</ButtonList>
				</ListItem>
				<ListItem hr>
					<Span className="todo-description">Nest js and Next js</Span>
					<ButtonList className="todo-buttons">
						<Button color="blue" outline="none" transparent>
							수정
						</Button>
						<Button color="#FDA7DF" outline="none" transparent>
							삭제
						</Button>
					</ButtonList>
				</ListItem>
			</List>
		</StyledTodoContent>
	);
};

export default TodoContent;
