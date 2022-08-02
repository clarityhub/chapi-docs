import styled from '@emotion/styled';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

import { WEBSITE_MAX_WIDTH } from '../constants';

const WebsiteContainer = styled.div`
    margin: 0 auto;
    max-width: ${WEBSITE_MAX_WIDTH}px;
    position: relative;
    width: 100%;
    z-index: 2;

    padding: 0 1.5rem;

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
        padding: 0 2.5rem;
    }
`;

export default WebsiteContainer;
