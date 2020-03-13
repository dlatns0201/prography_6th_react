import React from 'react';
import styled from 'styled-components';

import SignupContent from '../../../components/organisms/SignupContent';

const StyledTemplate = styled.div`
	display: flex;
	justify-content: center;
`;

const Template = () => {
	return (
		<StyledTemplate>
			<SignupContent />
		</StyledTemplate>
	);
};

export default Template;
