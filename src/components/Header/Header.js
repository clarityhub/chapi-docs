import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Logo from '@clarityhub/unity-web/lib/components/svgs/Logo';
import colors from '@clarityhub/unity-core/lib/colors';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

// import { WEBSITE_MAX_WIDTH } from '../../constants';
import Link from '../GatsbyLink';

// XXX Use the import above once
const WEBSITE_MAX_WIDTH = 1024;

// TODO Refactor magic numbers 
// TOOD refactor z-index
const Navbar = styled.nav(css`
    background: ${colors.brand.default};
    height: 65px;
    color: ${colors.white.default};
    padding-top: 10px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
`);

const PushDiv = styled.div`
    height: 65px;
`;

const LogoWrapper = styled.div`
    vertical-align: middle;

    a {
        align-items: center;
        border: 0;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
        margin-right: 40px;
        text-align: center;
        width: auto;
        
        border: 0;
        text-decoration: none;

        &:visited {
            border: 0;
        }
    }

    span {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-left: 15px;

       @media (max-width: 580px) {
           display: none;
       }
    }

    .h3 {
        font-size: 0.8rem;
    }

    img,
    svg  {
      height: 40px;
      width: auto;
    }
`;

const NavbarContent = styled.div(css`
    display: flex;
    margin: 2px auto 0;
    max-width: ${WEBSITE_MAX_WIDTH}px;
    transition: margin 0.3s ease;
    width: 100%;

    @media (max-width: ${WEBSITE_MAX_WIDTH + 40}px) {
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
    }
`);

const NavItems = styled.ul`
    align-items: center;
    display: flex;
    flex: 3;
    justify-content: center;
`;

const NavItem = styled.li`
    display: inline-block;
    flex: 1;
    text-align: center;

    & + & {
        margin-left: 15px;
    }
`;

const Gutter = styled.div`
    flex: 2;

    @media (max-width: 760px) {
        display: none;
    }
`;

class Header extends Component {
	render() {
		return (
			<Fragment>
				<Navbar>
					<NavbarContent>
						<LogoWrapper>
							<Link to="/" type="text">
								<Logo />
								<Typography variant="heading" color="white"><span>Clarity Hub</span></Typography>
							</Link>
						</LogoWrapper>
						<Gutter />
						<NavItems>
							<NavItem>
								<Link color="white" type="blockLink" variant="heading" to="/guides/">Guides</Link>
							</NavItem>
							<NavItem>
								<Link color="white" type="blockLink" variant="heading" to="/apis/">API Reference</Link>
							</NavItem>

						</NavItems>
					</NavbarContent>
				</Navbar>
				<PushDiv />
			</Fragment>
		);
	}
}

export default Header;
