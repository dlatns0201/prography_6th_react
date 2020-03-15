import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Span from '../atoms/Span';
import ButtonList from '../molecules/ButtonList';
import Button from '../atoms/Button';
import { RootState } from '../../modules';
import { logoutRequest } from '../../modules/user';

interface NavigationProps {}

const StyledNavigation = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	background-color: white;
	box-shadow: 5px 5px 3px lightgray;

	@media (max-width: 500px) {
		.nav-title {
			width: 100%;
			text-align: center;
			border-bottom: 0.5px solid lightgray;
		}
		.nav-category-list {
			width: 100%;
			& > * {
				flex-grow: 1;
			}
		}
	}
`;

const Navigation = () => {
	const { userInfo } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const onLogout = useCallback(() => {
		dispatch(logoutRequest());
	}, []);

	return (
		<StyledNavigation>
			<Span size="big" className="nav-title">
				프로그라피 프론트 임태현
			</Span>
			<ButtonList className="nav-category-list">
				<Button type="link" url="/" outline="none">
					Todo
				</Button>
				<Button type="link" url="/movie" outline="none">
					Movie
				</Button>
				{userInfo ? (
					<>
						<Span>{userInfo.nickname}</Span>
						<Button outline="none" onClick={onLogout}>
							Logout
						</Button>
					</>
				) : (
					<>
						<Button type="link" url="/login" outline="none">
							Login
						</Button>
						<Button type="link" url="/signup" outline="none">
							Signup
						</Button>
					</>
				)}
			</ButtonList>
		</StyledNavigation>
	);
};

export default Navigation;
