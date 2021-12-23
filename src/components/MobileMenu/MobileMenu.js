import { DialogContent, DialogOverlay } from '@reach/dialog';
import { QUERIES, WEIGHTS } from '../../constants';
import styled, { keyframes } from 'styled-components/macro';

import Icon from '../Icon';
/* eslint-disable no-unused-vars */
import React from 'react';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Overlay isOpen={isOpen} onDismiss={onDismiss}>
			<Backdrop />
			<Content aria-label='Menu'>
				<CloseButton onClick={onDismiss}>
					<Icon id='close' />
					<VisuallyHidden>Dismiss menu</VisuallyHidden>
				</CloseButton>
				<Filler />
				<Nav>
					<NavLink href='/sale'>Sale</NavLink>
					<NavLink href='/new'>New&nbsp;Releases</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/women'>Women</NavLink>
					<NavLink href='/kids'>Kids</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</Nav>
				<Footer>
					<SubLink href='/terms'>Terms and Conditions</SubLink>
					<SubLink href='/privacy'>Privacy Policy</SubLink>
					<SubLink href='/contact'>Contact Us</SubLink>
				</Footer>
			</Content>
		</Overlay>
	);
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: transparent;
	display: flex;
	justify-content: flex-end;
`;

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--color-backdrop);

	animation: ${fadeIn} 500ms ease-out;
`;

const Content = styled(DialogContent)`
	position: relative;
	background: white;
	width: 300px;
	height: 100%;
	padding: 24px 32px;
	display: flex;
	flex-direction: column;

	animation: ${slideIn} 300ms ease-out;
	animation-delay: 300ms;
	animation-fill-mode: both;

	& > * {
		animation: ${fadeIn} 300ms ease-out;
		animation-delay: 500ms;
		animation-fill-mode: both;
	}
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 10px;
	right: 0;
	padding: 16px;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const NavLink = styled.a`
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};
	text-decoration: none;
	font-size: 1.125rem;
	text-transform: uppercase;

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

const Filler = styled.div`
	flex: 1;
`;
const Footer = styled.footer`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 14px;
	justify-content: flex-end;
`;

const SubLink = styled.a`
	color: var(--color-gray-700);
	font-size: 0.875rem;
	text-decoration: none;
`;

export default MobileMenu;
