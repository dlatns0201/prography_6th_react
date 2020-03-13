import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import ButtonList from '../molecules/ButtonList';
import Button from '../atoms/Button';

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
				<Button type="link" url="/login" outline="none">
					Login
				</Button>
				<Button type="link" url="/signup" outline="none">
					Signup
				</Button>
			</ButtonList>
		</StyledNavigation>
	);
};

export default Navigation;
