import { QUERIES, WEIGHTS } from '../../constants';

import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import React from 'react';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components/macro';

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<DesktopNav>
					<NavLink href='/sale'>
						<NormalText>Sale</NormalText>
						<BoldText>Sale</BoldText>
					</NavLink>
					<NavLink href='/new'>
						<NormalText>New&nbsp;Releases</NormalText>
						<BoldText>New&nbsp;Releases</BoldText>
					</NavLink>
					<NavLink href='/men'>
						<NormalText>Men</NormalText>
						<BoldText>Men</BoldText>
					</NavLink>
					<NavLink href='/women'>
						<NormalText>Women</NormalText>
						<BoldText>Women</BoldText>
					</NavLink>
					<NavLink href='/kids'>
						<NormalText>Kids</NormalText>
						<BoldText>Kids</BoldText>
					</NavLink>
					<NavLink href='/collections'>
						<NormalText>Collections</NormalText>
						<BoldText>Collections</BoldText>
					</NavLink>
				</DesktopNav>
				<MobileActions>
					<ShoppingBagButton>
						<Icon id='shopping-bag' />
						<VisuallyHidden>Open cart</VisuallyHidden>
					</ShoppingBagButton>
					<UnstyledButton>
						<Icon id='search' />
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id='menu' />
						<VisuallyHidden>Open menu</VisuallyHidden>
					</UnstyledButton>
				</MobileActions>
				<Filler />
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	border-bottom: 1px solid var(--color-gray-300);
	overflow: auto;

	@media ${QUERIES.tabletAndSmaller} {
		justify-content: space-between;
		align-items: center;
		border-top: 4px solid var(--color-gray-900);
	}

	@media ${QUERIES.phoneAndSmaller} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
	margin: 0px 48px;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		gap: 32px;
		display: flex;
	}

	@media ${QUERIES.phoneAndSmaller} {
		gap: 16px;
	}
`;

const LogoWrapper = styled.div`
	flex: 1;

	@media ${QUERIES.tabletAndSmaller} {
		flex: revert;
	}
`;

const ShoppingBagButton = styled(UnstyledButton)`
	transform: translateX(-2px);
`;

const Filler = styled.div`
	flex: 1;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const NormalText = styled.span`
	display: inline-block;
	will-change: transform;
	transform: translateY(0%);
	transition: transform 400ms;
`;

const BoldText = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	font-weight: ${WEIGHTS.bold};
	will-change: transform;
	transform: translateY(100%);
	transition: transform 400ms;
`;

const NavLink = styled.a`
	position: relative;
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};
	overflow: hidden;

	&:first-of-type {
		color: var(--color-secondary);
	}

	&:hover ${NormalText} {
		transform: translateY(-100%);
		transition: transform 300ms;
	}

	&:hover ${BoldText} {
		transform: translateY(0%);
		transition: transform 300ms;
	}
`;

export default Header;
