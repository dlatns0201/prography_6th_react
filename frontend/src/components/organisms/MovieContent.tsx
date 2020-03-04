import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../molecules/Title';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import Span from '../atoms/Span';
// eslint-disable-next-line no-unused-vars
import { RootState } from '../../modules';
import { loadMovieListRequest } from '../../modules/movie';
import Modal from './Modal';
import { Preloader } from '../../lib/preloadContext';

interface MovieContentProps {}

const StyledMovieContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;

	.movie-item {
		padding: 0;
	}
`;

const MovieContent = () => {
	const { movies, loading } = useSelector((state: RootState) => state.movie);
	const dispatch = useDispatch();

	const movieItems = movies.map(title => (
		<ListItem key={title}>
			<Span className="movie-item" textAlign="center" size="small" blockWidth>
				{title}
			</Span>
		</ListItem>
	));

	useEffect(() => {
		if (!movies.length) dispatch(loadMovieListRequest());
	}, []);

	if (!movies.length)
		return (
			<>
				{loading ? (
					<Modal dialog={<Span size="title">Loading...</Span>} />
				) : (
					<List listHeight="20px">{movieItems}</List>
				)}
				<Preloader resolve={() => dispatch(loadMovieListRequest())} />
			</>
		);

	return (
		<StyledMovieContent>
			<Title color="#FDA7DF">Movie List</Title>
			{loading ? <Modal dialog={<Span size="title">Loading...</Span>} /> : <List listHeight="20px">{movieItems}</List>}
		</StyledMovieContent>
	);
};

export default MovieContent;
