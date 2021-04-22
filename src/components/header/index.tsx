import React, { memo, FC, useState } from 'react';
import { compose } from 'redux';

import { Trigger, Menu } from '@fellesdatakatalog/dropdown-menu';

import env from '../../env';

import SC from './styled';

const { USE_DEMO_LOGO } = env;

const Header: FC = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const openDropdownMenu = () => setIsDropdownMenuOpen(true);
  const closeDropdownMenu = () => setIsDropdownMenuOpen(false);

  return (
    <SC.Header>
      <SC.Row>
        {USE_DEMO_LOGO ? <SC.DemoLogo /> : <SC.Logo />}
        <SC.NavigationLinks>
          <li>
            <SC.Link href='/about'>Om Felles datakatalog</SC.Link>
          </li>
          <li>
            <SC.Link href='/organizations'>Virksomheter</SC.Link>
          </li>
          <li>
            <SC.Link href='/reports'>Rapporter</SC.Link>
          </li>
          <li>
            <SC.Link href='/publishing' target='_self' external>
              Publisere
            </SC.Link>
          </li>
        </SC.NavigationLinks>
        <SC.DropdownMenu
          isOpen={isDropdownMenuOpen}
          onClose={closeDropdownMenu}
        >
          <Trigger>
            <SC.MenuButton onClick={openDropdownMenu}>Meny</SC.MenuButton>
          </Trigger>
          <Menu>
            <SC.Menu>
              <li>
                <SC.Link href='/about'>Om Felles datakatalog</SC.Link>
              </li>
              <li>
                <SC.Link href='/organizations'>Virksomheter</SC.Link>
              </li>
              <li>
                <SC.Link href='/reports'>Rapporter</SC.Link>
              </li>
              <li>
                <SC.Link href='/publishing' target='_self' external>
                  Publisere
                </SC.Link>
              </li>
            </SC.Menu>
          </Menu>
        </SC.DropdownMenu>
      </SC.Row>
    </SC.Header>
  );
};

export default compose<FC>(memo)(Header);
