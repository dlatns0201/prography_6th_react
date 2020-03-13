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

interface SignupContentProps {}

const StyledSignupContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.signup-form {
		width: 100%;

		& > * {
			margin-bottom: 0.3em;
		}
	}
`;

const SignupContent = () => {
	useEffect(() => {}, []);

	return (
		<StyledSignupContent>
			<Title>Signup</Title>
			<Form className="signup-form">
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Input type="text" placeholder="Nickname" />
				<Button type="submit">Submit</Button>
			</Form>
		</StyledSignupContent>
	);
};

export default SignupContent;
