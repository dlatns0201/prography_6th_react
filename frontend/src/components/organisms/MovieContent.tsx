import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../molecules/Title';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import Span from '../atoms/Span';
import { RootState } from '../../modules';

interface MovieContentProps {}

const StyledMovieContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;
`;

const MovieContent = () => {
	const { movies } = useSelector((state: RootState) => state.movie);
	const movieItems = movies.map(v => (
		<ListItem key={v.title}>
			<Span textAlign="center" blockWidth>
				{v.title}
			</Span>
		</ListItem>
	));

	return (
		<StyledMovieContent>
			<Title color="#FDA7DF">Movie List</Title>
			<List>{movieItems}</List>
		</StyledMovieContent>
	);
};

export default MovieContent;
