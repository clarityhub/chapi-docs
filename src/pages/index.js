/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';

const sections = [
	{
		to: '/guides/access-keys',
		title: 'Access Keys',
		description: 'Generate, store, and use Access Keys to use the Clarity Hub API.',
		readMore: 'Read more →',
	},
	{
		to: '/guides/infer-models',
		title: 'Infer Models',
		description: 'Train and predict intents using your existing conversation data.',
		readMore: 'Read more →',
	},
	{
		to: '/guides/nlp',
		title: 'NLP APIs',
		description: 'Get NLP information from your chat data.',
		readMore: 'Read more →',
	},
	{
		to: '/apis/',
		title: 'API Reference',
		description: 'Use our API directly via REST.',
		readMore: 'Read more →',
	},
];

export default ({location}) => (
	<Layout location={location}>
		<Box>
			<FlexGridContainer size="small" >
				<Typography type="h1">
					API Documentation
				</Typography>

				<Typography>
					Welcome to Clarity Hub!
				</Typography>

				<Typography>
					Get familiar with the Clarity Hub products and APIs:
				</Typography>


				<Box flex direction="column" gap="medium" margin={{ top: "large", bottom: "large" }}>
					{
						sections.map((section, i) => (
							<SectionCard
								key={i}
								{...section}
							/>
						))
					}
				</Box>
			</FlexGridContainer>
		</Box>
	</Layout>
);
