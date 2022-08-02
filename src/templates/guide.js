import React from "react";
import GuideLayout from '../components/Layout/GuideLayout';

import ArticleDetails from '../components/ArticleDetails';
import ArticlePublicationDate from '../components/ArticlePublicationDate';
import ArticleTitle from '../components/ArticleTitle';
import Article from '../components/Article';
import ArticleContent from '../components/ArticleContent';

const Guide = ({ pathContext, location }) => {
	const post = pathContext.node;
	const site = pathContext.site;

	return (
		<GuideLayout location={location} title={site.title}>
			<Article>
				<ArticleDetails>
					<ArticleTitle>
						{post.frontmatter.title}
					</ArticleTitle>
					<ArticlePublicationDate date={post.frontmatter.date} />
				</ArticleDetails>
				<ArticleContent htmlAst={post.htmlAst} />
			</Article>
		</GuideLayout>
	);
};

export default Guide;
