import React from "react";
import slugify from 'slugify';
import { useStaticQuery, graphql } from "gatsby";
import Link from '@clarityhub/unity-web/lib/components/Link';
import SideNav, { SideNavItem, SideNavGroup } from "@clarityhub/unity-web/lib/components/SideNav";

import GatsbyLink from '../components/GatsbyLink';

const selected = (location, categorySlug, slug) => {
	if (!slug) {
		return location.pathname.includes(categorySlug);
	}
	
	return location.pathname === slug;
};

export default ({ location }) => {
	const data = useStaticQuery(
		graphql`
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
                        title
                        date(formatString: "DD MMMM, YYYY")
                        category
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
            }
        }
    `
	);

	const categories = {};
	data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (categories[node.frontmatter.category]){
			categories[node.frontmatter.category].push({ title: node.frontmatter.title, slug: node.fields.slug});
		} else {
			categories[node.frontmatter.category] = [{ title: node.frontmatter.title, slug: node.fields.slug}];
		}
	});

	// TODO: determine if the path is selected

	return (
		<SideNav>
			{
				Object.entries(categories).map(([category, nodes], i) => {
					const categorySlug = slugify(category, { lower: true});
					return (
						<SideNavItem selected={selected(location, categorySlug)} key={i}>
							<Link component={GatsbyLink} to={`/guides/${categorySlug}`}>{category}</Link>
							<SideNavGroup>
								{
									nodes.map((node) => {
										return (
											<SideNavItem key={node.slug} selected={selected(location, categorySlug, node.slug)}>
												<Link component={GatsbyLink} to={`${node.slug}`}>{node.title}</Link>
											</SideNavItem>
										);
									})
								}
							</SideNavGroup>
						</SideNavItem >
					);
				})
			}
		</SideNav>
	);
};