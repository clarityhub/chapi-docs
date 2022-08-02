import React from 'react';
import { RedocStandalone } from 'redoc';

import ApiLayout from '../components/Layout/ApiLayout';

export default ({ location, pageContext }) => {
	const { api } = pageContext;

	return (
		<ApiLayout location={location}>
			<RedocStandalone specUrl={api.url} />
		</ApiLayout>
	);
};
