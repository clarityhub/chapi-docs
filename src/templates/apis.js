import React from 'react';

import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import SectionCard from '../components/SectionCard';
import ArticleList from '../components/ArticleList';
import ApiLayout from '../components/Layout/ApiLayout';
import ArticleDetails from '../components/ArticleDetails';
import ArticleTitle from '../components/ArticleTitle';
import Article from '../components/Article';

export default ({ location, pageContext }) => {
	const { apis } = pageContext;

	return (
		<ApiLayout location={location}>
			<Article>
				<ArticleDetails>
					<ArticleTitle>
						APIs
					</ArticleTitle>
				</ArticleDetails>
				<ArticleList
					items={apis}
					itemRenderer={({ item }) => (
						<Box flex={1} margin={{ bottom: 'small' }}>
							<SectionCard
								to={item.slug}
								title={item.title}
								// description={item.excerpt}
								readMore="Explore OpenAPI →"
							/>
						</Box>
					)}
				/>
			</Article>
		</ApiLayout>
	);
};
