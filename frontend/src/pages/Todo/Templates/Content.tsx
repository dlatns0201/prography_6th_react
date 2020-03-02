import React from 'react';
import styled from 'styled-components';

import TodoContent from '../../../components/organisms/TodoContent';

const StyledContent = styled.div`
	display: flex;
	justify-content: center;
`;

const Content = () => {
	return (
		<StyledContent>
			<TodoContent />
		</StyledContent>
	);
};

export default Content;
