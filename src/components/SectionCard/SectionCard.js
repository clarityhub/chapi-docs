/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Link as GatsbyLink } from 'gatsby';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const SectionCard = ({ to, title, description, readMore }) => (
	<Box flex={1}>
		<Card hoverable as={GatsbyLink} to={to} css={css`
			text-decoration: none;
		`}>
			<CardBody>
				<Typography type="h3">{title}</Typography>
				<Box margin={{ top: "small" }}>
					<Typography type="text">
						{description}
					</Typography>
					<Typography type="text">
						{readMore}
					</Typography>
				</Box>
			</CardBody>
		</Card>
	</Box>
);

export default SectionCard;
