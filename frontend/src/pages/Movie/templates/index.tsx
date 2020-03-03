import React from 'react';
import styled from 'styled-components';

import MovieContent from '../../../components/organisms/MovieContent';

const StyledTemplate = styled.div`
	display: flex;
	justify-content: center;
`;

const Template = () => {
	return (
		<StyledTemplate>
			<MovieContent />
		</StyledTemplate>
	);
};

export default Template;
