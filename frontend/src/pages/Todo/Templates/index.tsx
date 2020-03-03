import React from 'react';
import styled from 'styled-components';

import TodoContent from '../../../components/organisms/TodoContent';

const StyledTemplate = styled.div`
	display: flex;
	justify-content: center;
`;

const Template = () => {
	return (
		<StyledTemplate>
			<TodoContent />
		</StyledTemplate>
	);
};

export default Template;
