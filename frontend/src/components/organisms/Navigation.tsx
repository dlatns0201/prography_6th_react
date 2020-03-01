import React from 'react';
import styled from 'styled-components';
import Title from '../molecules/Title';
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
			<Title>임태현</Title>
			<ButtonList>
				<Button type="route" url="/">
					Todo
				</Button>
				<Button type="route" url="/movie">
					Movie
				</Button>
			</ButtonList>
		</StyledNavigation>
	);
};

export default Navigation;
