import React, { useEffect } from 'react';
import styled from 'styled-components';
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
`;

const LoginContent = () => {
	useEffect(() => {}, []);

	return (
		<StyledLoginContent>
			<Title>Login</Title>
			<Form className="login-form">
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Button type="submit">Submit</Button>
			</Form>
		</StyledLoginContent>
	);
};

export default LoginContent;
