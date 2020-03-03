import React, { useState, useCallback, memo, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../molecules/Title';
import Form from '../atoms/Form';
import List from '../molecules/List';
import Input from '../atoms/Input';
import ListItem from '../molecules/ListItem';
import Span from '../atoms/Span';
import ButtonList from '../molecules/ButtonList';
import Button from '../atoms/Button';
// eslint-disable-next-line no-unused-vars
import { RootState } from '../../modules';
import { loadTodosRequest, insertTodoRequest, deleteTodoRequest, changeToInput } from '../../modules/todo';

interface TodoContentProps {}

const StyledTodoContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;
	align-items: center;

	input {
		border: none;
	}
	input[name='todo-create-input'] {
		border-bottom: 0.3px solid lightgray;
	}
	.todo-list-item {
		flex-wrap: wrap;
		max-width: 730px;
	}
	.todo-form {
		width: 100%;
	}
	.todo-description {
		padding: 0.9em 1.57em;
		width: 76%;
		box-sizing: border-box;
	}
	.todo-description.todo-update-input {
		width: 100%;
	}
	.todo-buttons {
		width: 24%;
		box-sizing: border-box;
	}

	@media (max-width: 750px) {
		min-width: 100%;
		.todo-list-item {
			height: auto;
		}
		.todo-description {
			width: 100%;
		}
		.todo-buttons {
			width: 100%;
			margin-right: 0;
			border-top: 0.5px solid lightgray;

			*:first-child {
				border-right: 0.5px solid lightgray;
			}
		}
	}
`;

const TodoContent = () => {
	const [value, setValue] = useState('');
	const { todos, loading } = useSelector((state: RootState) => state.todo);
	const dispatch = useDispatch();

	const onSubmitForm = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			dispatch(insertTodoRequest(value));
			setValue('');
		},
		[value]
	);
	const onDeleteItem = useCallback((id: string) => () => dispatch(deleteTodoRequest(id)), []);
	const onChangeToInput = useCallback((id: string) => () => dispatch(changeToInput(id)), []);

	useEffect(() => {
		dispatch(loadTodosRequest());
	}, []);

	const todoItems = useMemo(
		() =>
			todos.map(v => (
				<ListItem key={v.id} hr className="todo-list-item">
					{v.writeMode ? (
						<Input className="todo-description todo-update-input" value={v.text} size="big" />
					) : (
						<>
							<Span className="todo-description">{v.text}</Span>
							<ButtonList className="todo-buttons">
								<Button color="blue" outline="none" transparent onClick={onChangeToInput(v.id)}>
									수정
								</Button>
								<Button color="#FDA7DF" outline="none" transparent onClick={onDeleteItem(v.id)}>
									삭제
								</Button>
							</ButtonList>
						</>
					)}
				</ListItem>
			)),
		[todos]
	);

	return (
		<StyledTodoContent>
			<Title color="#FDA7DF">Todos</Title>
			<Form flexDirection="column" className="todo-form" onSubmit={onSubmitForm}>
				<Input placeholder="무엇을 해야하나요?" name="todo-create-input" value={value} setValue={setValue} />
			</Form>
			{loading ? <div> 변경사항 적용 중...</div> : null}
			<List white listHeight="66px">
				{todoItems}
			</List>
		</StyledTodoContent>
	);
};

export default memo(TodoContent);
