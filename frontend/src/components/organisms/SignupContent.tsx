import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import { RootState } from '../../modules';
import Modal from './Modal';
import { Preloader } from '../../lib/preloadContext';
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Title from '../molecules/Title';
import { signupRequest } from '../../modules/user';

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

	@media (max-width: 750px) {
		min-width: 90%;
	}
`;

const SignupContent = () => {
	const { loading } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');

	const onSubmitForm = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			dispatch(signupRequest(email, password, nickname));
		},
		[email, password, nickname]
	);

	useEffect(() => {}, []);

	return (
		<StyledSignupContent>
			{loading && loading.signup && <Modal dialog={<Title>Loading...</Title>} />}
			<Title color="#FDA7DF">Signup</Title>
			<Form className="signup-form" onSubmit={onSubmitForm}>
				<Input type="email" value={email} setValue={setEmail} placeholder="Email" />
				<Input type="password" value={password} setValue={setPassword} placeholder="Password" />
				<Input type="text" value={nickname} setValue={setNickname} placeholder="Nickname" />
				<Button type="submit">Submit</Button>
			</Form>
		</StyledSignupContent>
	);
};

export default SignupContent;
