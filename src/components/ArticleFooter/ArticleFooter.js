import React from 'react';
import styled from '@emotion/styled';
import Break from '@clarityhub/unity-web/lib/components/Break';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const FooterWrapper = styled.div`
    padding-bottom: 4rem;
`;

const ArticleFooter = () => (
	<FooterWrapper>
		<Break />
		<Typography type="h2">
			<span role="img" aria-label="Popper">🎉</span>
			{' '}
            Join Our Weekly Newsletter
		</Typography>
        
		<Typography type="p">
            At Clarity Hub, we empower developers and the open-source
            community with our newsletter, articles, and open-source
            contributions. Join our newsletter to get a weekly dose of
            hot issues in the open source community, grow your programming
            skills, and improve your resume!
		</Typography>
	</FooterWrapper>
);

export default ArticleFooter;
