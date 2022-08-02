import React from 'react';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

import Metadata from '../Metadata';
import Header from '../Header';
import Footer from '../Footer';

const LayoutWrapper = styled.div`
    background-color: ${colors.dove.default};
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Content = styled.div`
    width: 100%;
	flex: 1;
	margin-bottom: 4rem;
`;

const Layout = ({ children, location: { pathname } }) => (
	<LayoutWrapper>
		<Metadata pathname={pathname} />
		<Header />

		<Content>
			{children}
		</Content>

		<Footer />
	</LayoutWrapper>
);

export default Layout;
