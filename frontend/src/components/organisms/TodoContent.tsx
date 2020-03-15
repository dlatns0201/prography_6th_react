import React, { useState, useCallback, memo, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
import {
	loadTodosRequest,
	insertTodoRequest,
	deleteTodoRequest,
	changeToInput,
	updateTodoRequest,
	// eslint-disable-next-line no-unused-vars
	Todo,
	toggleTodoRequest
} from '../../modules/todo';
import Modal from './Modal';
import { Preloader } from '../../lib/preloadContext';

interface TodoContentProps {}
interface UpdateInputValue {
	[id: string]: string;
}

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
	const { todos, loading } = useSelector((state: RootState) => state.todo);
	const { userInfo } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const [insertInputValue, setInsertInputValue] = useState('');
	const [updateInputValues, setUpdateInputValues] = useState<UpdateInputValue>({});

	const onSubmitForm = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			dispatch(insertTodoRequest(insertInputValue));
			setInsertInputValue('');
		},
		[insertInputValue]
	);
	const onDeleteItem = useCallback((id: string) => () => dispatch(deleteTodoRequest(id)), []);
	const onChangeToInput = useCallback(
		(id: string, text: string) => () => {
			dispatch(changeToInput(id));
			setUpdateInputValues({ ...updateInputValues, [id]: text });
		},
		[updateInputValues]
	);
	const onChangeInput = useCallback(
		(id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setUpdateInputValues({ ...updateInputValues, [id]: e.target.value });
		},
		[updateInputValues]
	);
	const onEnter = useCallback(
		(id: string, description: string, done: boolean) => (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') dispatch(updateTodoRequest({ id, description, writeMode: false, done }));
		},
		[]
	);
	const onToggleDone = useCallback(
		(id: string, done: boolean) => () => {
			dispatch(toggleTodoRequest(id, done));
		},
		[]
	);

	const todoItems = useMemo(
		() =>
			todos &&
			todos.map(v => (
				<ListItem key={v.id} hr className="todo-list-item">
					{v.writeMode ? (
						<Input
							className="todo-description todo-update-input"
							onChange={onChangeInput(v.id)}
							onKeyDown={onEnter(v.id, updateInputValues[v.id], v.done)}
							value={updateInputValues[v.id]}
							size="big"
						/>
					) : (
						<>
							<Span className="todo-description" del={v.done} onClick={onToggleDone(v.id, v.done)}>
								{v.description}
							</Span>

							<ButtonList className="todo-buttons">
								<Button color="blue" outline="none" transparent onClick={onChangeToInput(v.id, v.description)}>
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
		[todos, updateInputValues]
	);

	useEffect(() => {
		if (!todos) dispatch(loadTodosRequest());
	}, [userInfo?.email]);

	// if (!todos.length)
	// 	return (
	// 		<>
	// 			{loading ? <Modal dialog={<Span size="title">Loading...</Span>} /> : null}
	// 			<Preloader resolve={() => dispatch(loadTodosRequest([]))} />
	// 		</>
	// );

	return (
		<StyledTodoContent>
			{!userInfo && <Redirect to="/login" />}
			<Title color="#FDA7DF">Todos</Title>
			<Form flexDirection="column" className="todo-form" onSubmit={onSubmitForm}>
				<Input
					placeholder="무엇을 해야하나요?"
					name="todo-create-input"
					value={insertInputValue}
					setValue={setInsertInputValue}
				/>
			</Form>
			{userInfo && (loading ? <Modal dialog={<Span size="title">Loading...</Span>} /> : null)}
			<List white listHeight="66px">
				{todoItems}
			</List>
		</StyledTodoContent>
	);
};

export default memo(TodoContent);
