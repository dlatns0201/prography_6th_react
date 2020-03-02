import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import ButtonList from '../molecules/ButtonList';
import Button from '../atoms/Button';

interface NavigationProps {}

const StyledNavigation = styled.div`
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: space-around;
	background-color: white;
	box-shadow: 5px 5px 3px lightgray;
`;

const Navigation = () => {
	return (
		<StyledNavigation>
			<Span size="big">임태현</Span>
			<ButtonList>
				<Button type="route" url="/" outline="none">
					Todo
				</Button>
				<Button type="route" url="/movie" outline="none">
					Movie
				</Button>
			</ButtonList>
		</StyledNavigation>
	);
};

export default Navigation;
