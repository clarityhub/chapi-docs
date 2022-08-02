import React from "react";
import Link from '@clarityhub/unity-web/lib/components/Link';
import SideNav, { SideNavItem } from "@clarityhub/unity-web/lib/components/SideNav";

import apis from '../config/apis';
import GatsbyLink from '../components/GatsbyLink';

const selected = (location, slug) => {
	return location.pathname === slug;
};

export default ({ location }) => {

	return (
		<SideNav>
			{
				apis.map((api, i) => {
					return (
						<SideNavItem selected={selected(location, api.slug)} key={i}>
							<Link component={GatsbyLink} to={api.slug}>{api.title}</Link>
						</SideNavItem >
					);
				})
			}
		</SideNav>
	);
};