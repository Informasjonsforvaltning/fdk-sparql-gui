import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';
import LinkBase from '@fellesdatakatalog/link';

import DropdownMenuBase from '@fellesdatakatalog/dropdown-menu';

import LogoSVG from '../../images/fdk-logo.svg';
import DemoLogoSVG from '../../images/fdk-logo-demo.svg';

const onMobileView = '@media (max-width: 900px)';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  z-index: 2;

  ${onMobileView} {
    & {
      height: calc(55px + (80 - 55) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1204px) {
    & {
      width: 100%;
      margin: 0 ${theme.spacing('S32')};
    }
  }

  ${onMobileView} {
    & {
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Logo = styled(LogoSVG)`
  height: 40px;
`;

const DemoLogo = styled(DemoLogoSVG)`
  height: 40px;
`;

const Link = styled(LinkBase)`
  & > div {
    padding: 0;
    border: none;
  }
`;

const NavigationLinks = styled.ul`
  display: flex;
  margin-left: auto;

  & > li * {
    color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  }

  & > li:nth-of-type(n + 2) {
    margin-left: ${theme.spacing('S24')};
  }

  ${onMobileView} {
    & {
      display: none;
    }
  }
`;

const DropdownMenu = styled(DropdownMenuBase)`
  display: none;
  margin-left: auto;

  ${onMobileView} {
    & {
      display: flex;
    }
  }
`;

const LanguageMenu = styled(DropdownMenuBase)`
  display: flex;
  margin-left: auto;
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:after {
    content: '\\25BC';
    font-size: 10px;
    margin-top: 1px;
    margin-left: ${theme.spacing('S6')};
  }
`;

const Menu = styled.ul`
  position: relative;
  border-radius: 5px;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1;

  & > li > a {
    display: block;
    padding: ${theme.spacing('S12')} ${theme.spacing('S16')};
    white-space: pre;

    &:hover {
      background: ${theme.colour(Colour.NEUTRAL, 'N10')};
    }
  }
`;

const ButtonItem = styled.button`
  width: 100%;
  height: 100%;
  padding: ${theme.spacing('S12')} ${theme.spacing('S16')};
  border: none;
  background: none;
  text-align: left;
  white-space: pre;
  cursor: pointer;

  &:hover {
    background: ${theme.colour(Colour.NEUTRAL, 'N10')};
  }

  ${onMobileView} {
    padding: 14px 28px 14px 28px;
  }
`;

export default {
  Header,
  Row,
  Logo,
  DemoLogo,
  NavigationLinks,
  Link,
  DropdownMenu,
  LanguageMenu,
  MenuButton,
  ButtonItem,
  Menu
};
