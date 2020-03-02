import React from 'react';
import styled from 'styled-components';

import Title from '../molecules/Title';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import Span from '../atoms/Span';

interface MovieContentProps {}

const StyledMovieContent = styled.div`
	min-width: 40vw;
	display: flex;
	flex-direction: column;
`;

const MovieContent = () => {
	return (
		<StyledMovieContent>
			<Title color="">Movie List</Title>
			<List>
				<ListItem>
					<Span textAlign="center"> movie </Span>
				</ListItem>
				<ListItem>
					<Span textAlign="center"> joa </Span>
				</ListItem>
				<ListItem>
					<Span textAlign="center"> nado </Span>
				</ListItem>
			</List>
		</StyledMovieContent>
	);
};

export default MovieContent;
