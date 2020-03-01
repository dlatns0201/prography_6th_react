import React from 'react';
import styled from 'styled-components';

interface MovieContentProps {
	children: React.ReactChildren;
}

const StyledMovieContent = styled.div``;

const MovieContent = ({ children }: MovieContentProps) => {
	return <StyledMovieContent>{children}</StyledMovieContent>;
};

export default MovieContent;
