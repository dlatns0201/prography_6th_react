import React from 'react';
import styled from 'styled-components';

import LoginContent from '../../../components/organisms/LoginContent';

const StyledTemplate = styled.div`
	display: flex;
	justify-content: center;
`;

const Template = () => {
	return (
		<StyledTemplate>
			<LoginContent />
		</StyledTemplate>
	);
};

export default Template;
