import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import { RootState } from '../../modules';
// import { loadMovieListRequest } from '../../modules/user';
import Modal from './Modal';
import { Preloader } from '../../lib/preloadContext';
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Title from '../molecules/Title';

interface LoginContentProps {}

const StyledLoginContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.login-form {
		width: 100%;

		& > * {
			margin-bottom: 0.3em;
		}
	}

	@media (max-width: 750px) {
		min-width: 90%;
	}
`;

const LoginContent = () => {
	const { loading } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitForm = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
		},
		[email, password]
	);

	useEffect(() => {}, []);

	return (
		<StyledLoginContent>
			{loading && loading.login && <Modal dialog={<Title>Loading...</Title>} />}
			<Title color="#FDA7DF">Login</Title>
			<Form className="login-form" onSubmit={onSubmitForm}>
				<Input type="email" value={email} setValue={setEmail} placeholder="Email" />
				<Input type="password" value={password} setValue={setPassword} placeholder="Password" />
				<Button type="submit">Submit</Button>
			</Form>
		</StyledLoginContent>
	);
};

export default LoginContent;
