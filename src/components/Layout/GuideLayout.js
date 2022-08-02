import React from "react";
import styled from '@emotion/styled';
import Box from "@clarityhub/unity-web/lib/scaffolding/Box";
import Layout from '../Layout';
import SideBar from '../../templates/sidebarItems';
import WebsiteContainer from './WebsiteContainer';

const ViewContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavArea = styled.div`
    width: 300px;
    padding: 0 1rem;
    height: 100%;
`;

export default ({ location, children }) => {
	return (
		<Layout location={location}>
			<WebsiteContainer>
				<ViewContainer>
					<NavArea>
						<SideBar location={location} />
					</NavArea>
					<Box style={{ width: '100%' }}>
						{children}
					</Box>
				</ViewContainer>
			</WebsiteContainer>
		</Layout>
	);
};
