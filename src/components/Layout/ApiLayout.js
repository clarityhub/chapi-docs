import React from "react";
import styled from '@emotion/styled';
import Box from "@clarityhub/unity-web/lib/scaffolding/Box";
import Layout from '../Layout';
import ApiSideBar from '../../templates/apiSidebarItems';

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
			<ViewContainer>
				<NavArea>
					<ApiSideBar location={location} />
				</NavArea>
				<Box style={{ width: '100%' }}>
					{children}
				</Box>
			</ViewContainer>
		</Layout>
	);
};
