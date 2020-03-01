import React from 'react';
import styled from 'styled-components';

interface NavigationProps {
	children: React.ReactChildren;
}

const StyledNavigation = styled.div``;

const Navigation = ({ children }: NavigationProps) => {
	return <StyledNavigation>{children}</StyledNavigation>;
};

export default Navigation;
