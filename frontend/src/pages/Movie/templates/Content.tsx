import React from 'react';
import styled from 'styled-components';

import MovieContent from '../../../components/organisms/MovieContent';

const StyledContent = styled.div`
	display: flex;
	justify-content: center;
`;

const Content = () => {
	return (
		<StyledContent>
			<MovieContent />
		</StyledContent>
	);
};

export default Content;
