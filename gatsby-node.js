const path = require(`path`);
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

const apis = require('./src/config/apis');

exports.createPages = async ({ graphql, actions }) => {
	return Promise.all([
		createGuides({ graphql, actions }),
		createApis({ graphql, actions }),
	]);
};

const createApis = async ({ graphql, actions }) => {
	const { createPage } = actions;

	createPage({
		path: '/apis',
		component: path.resolve(`./src/templates/apis.js`),
		context: {
			apis,
		},
	});

	apis.forEach((api) => {
		createPage({
			path: api.slug,
			component: path.resolve(`./src/templates/api.js`),
			context: {
				api,
			},
		});
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		// const value = createFilePath({ node, getNode })
		const category = node.frontmatter.category;
		const slug = createFilePath({ node, getNode, basePath: 'pages' });
		createNodeField({
			name: `slug`,
			node,
			value: `/guides/${slugify(category, { lower: true })}${slug}`,
		});
	}
};

const createGuides = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(
		`
		{
			site {
                siteMetadata {
                    siteUrl
                }
            }
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						id
                        htmlAst
                        excerpt
						frontmatter {
                            title
                            date(formatString: "DD MMMM, YYYY")
							tags
							category
                        }
                        fields {
                            slug
                        }
					}
				}
			}
		}
    `
	);
	if (result.errors) {
		throw result.errors;
	}

	// Create blog posts pages.
	const posts = result.data.allMarkdownRemark.edges;

	posts.forEach((post, index) => {
		createPage({
			path: post.node.fields.slug,
			component: path.resolve(`./src/templates/guide.js`),
			context: {
				slug: post.node.fields.slug,
				node: post.node,
				site: result.data.site,
			},
		});
	});

	await createTopicPages({ result, createPage });

};

const createTopicPages = ({ result, createPage }) => {
	const categories = {};

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { category } = node.frontmatter;
		if (!categories[category]) {
			categories[category] = [];
		}
		categories[category].push(node);
	});

	Object.keys(categories).forEach(category => {
		const slug = `/guides/${slugify(category, { lower: true })}/`;

		createPage({
			path: slug,
			component: path.resolve(`./src/templates/topic.js`),
			context: {
				category,
				slug,
				site: result.data.site,
				nodes: categories[category],
			},
		});
	});
};
