import React from 'react';

import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import SectionCard from '../components/SectionCard';
import ArticleList from '../components/ArticleList';
import GuideLayout from '../components/Layout/GuideLayout';
import ArticleDetails from '../components/ArticleDetails';
import ArticleTitle from '../components/ArticleTitle';
import Article from '../components/Article';

export default ({ location, pageContext }) => {
	const { category, nodes } = pageContext;

	return (
		<GuideLayout location={location}>
			<Article>
				<ArticleDetails>
					<ArticleTitle>
						Guides for {category}
					</ArticleTitle>
				</ArticleDetails>
				<ArticleList
					items={nodes}
					itemRenderer={({ item }) => (
						<Box flex={1} margin={{ bottom: 'small' }}>
							<SectionCard
								to={item.fields.slug}
								title={item.frontmatter.title}
								// description={item.excerpt}
								readMore="Continue reading →"
							/>
						</Box>
					)}
				/>
			</Article>
		</GuideLayout>
	);
};
