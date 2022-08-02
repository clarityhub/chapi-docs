import React from 'react';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import { graphql, Link } from 'gatsby';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';
import slugify from 'slugify';

import GuideLayout from '../components/Layout/GuideLayout';

export default ({ location, data }) => {
	const categories = {};

	data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (categories[node.frontmatter.category]){
			categories[node.frontmatter.category].push({ title: node.frontmatter.title});
		} else {
			categories[node.frontmatter.category] = [{ title: node.frontmatter.title}];
		}
	});

	const sorted = Object.keys(categories).sort();

	return (
		<GuideLayout location={location}>
			<FlexGridContainer size="small">
				<Typography type="h1">
					Guides
				</Typography>

				<Box gap="small" direction="column" flex={1}>
					{sorted.map(t => {
						const slug = slugify(t, { lower: true });

						return (
							<Box flex={1}>
								<Card as={Link} to={`/guides/${slug}`} style={{ textDecoration: 'none' }}>
									<CardBody>
										<Typography type="h3">{t}</Typography>
										<Typography>{categories[t].length} guide{categories[t].length > 1 ? 's' : ''}</Typography>
									</CardBody>
								</Card>
							</Box>
						);
					})}
				</Box>
			</FlexGridContainer>

		</GuideLayout>
	);
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {
        fields: [frontmatter___date],
        order: DESC
    }) {
      totalCount
      edges {
        node {
            id
            frontmatter {
                category
                title
            }
        }
      }
    }
  }
`;

