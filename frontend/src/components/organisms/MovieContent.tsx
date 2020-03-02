import React from 'react';
import styled from 'styled-components';

import Title from '../molecules/Title';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import Span from '../atoms/Span';

interface MovieContentProps {}

const StyledMovieContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;
`;

const MovieContent = () => {
	return (
		<StyledMovieContent>
			<Title color="#FDA7DF">Movie List</Title>
			<List>
				<ListItem>
					<Span textAlign="center" blockWidth>
						movie
					</Span>
				</ListItem>
				<ListItem>
					<Span textAlign="center" blockWidth>
						joa
					</Span>
				</ListItem>
				<ListItem>
					<Span textAlign="center" blockWidth>
						nado
					</Span>
				</ListItem>
			</List>
		</StyledMovieContent>
	);
};

export default MovieContent;
