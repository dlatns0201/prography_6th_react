import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../molecules/Title';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import Span from '../atoms/Span';
import { RootState } from '../../modules';
import { loadMovieListRequest } from '../../modules/movie';

interface MovieContentProps {}

const StyledMovieContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;
`;

const MovieContent = () => {
	const { movies, loading } = useSelector((state: RootState) => state.movie);
	const dispatch = useDispatch();

	const movieItems = movies.map(title => (
		<ListItem key={title}>
			<Span textAlign="center" size="small" blockWidth>
				{title}
			</Span>
		</ListItem>
	));

	useEffect(() => {
		dispatch(loadMovieListRequest());
	}, []);

	return (
		<StyledMovieContent>
			<Title color="#FDA7DF">Movie List</Title>
			{loading ? <div> 로딩 중...</div> : <List listHeight="20px">{movieItems}</List>}
		</StyledMovieContent>
	);
};

export default MovieContent;
