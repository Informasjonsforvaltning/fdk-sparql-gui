import React, { memo, FC, useState } from 'react';
import { compose } from 'redux';

import { Trigger, Menu } from '@fellesdatakatalog/dropdown-menu';

import Translation from '../translation';

import env from '../../env';

import SC from './styled';

import {
  withTranslations,
  Props as TranslationsProps,
  Language
} from '../../providers/translations';

const { USE_DEMO_LOGO } = env;

interface Props extends TranslationsProps {}

const Header: FC<Props> = ({ translationsService }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const openDropdownMenu = () => setIsDropdownMenuOpen(true);
  const closeDropdownMenu = () => setIsDropdownMenuOpen(false);

  const openLanguageMenu = () => setIsLanguageMenuOpen(true);
  const closeLanguageMenu = () => setIsLanguageMenuOpen(false);

  const handleChangeLanguage = (language: Language) => () => {
    translationsService.changeLanguage(language);
    closeLanguageMenu();
  };

  return (
    <SC.Header>
      <SC.Row>
        <a href='/'>{USE_DEMO_LOGO ? <SC.DemoLogo /> : <SC.Logo />}</a>
        <SC.NavigationLinks>
          <li>
            <SC.Link href='/about'>
              <Translation id='header.about' />
            </SC.Link>
          </li>
          <li>
            <SC.Link href='/organizations'>
              <Translation id='header.organizations' />
            </SC.Link>
          </li>
          <li>
            <SC.Link href='/reports'>
              <Translation id='header.reports' />
            </SC.Link>
          </li>
          <li>
            <SC.Link href='/publishing' target='_self' external>
              <Translation id='header.publishing' />
            </SC.Link>
          </li>
          <li>
            <SC.LanguageMenu
              isOpen={isLanguageMenuOpen}
              onClose={closeLanguageMenu}
            >
              <Trigger>
                <SC.MenuButton onClick={openLanguageMenu}>
                  <Translation id='lang.chosenLanguage' />
                </SC.MenuButton>
              </Trigger>
              <Menu>
                <SC.Menu>
                  <li>
                    <SC.MenuButton onClick={handleChangeLanguage(Language.NB)}>
                      <Translation id='lang.norwegian-nb' />
                    </SC.MenuButton>
                  </li>
                  <li>
                    <SC.MenuButton onClick={handleChangeLanguage(Language.NN)}>
                      <Translation id='lang.norwegian-nn' />
                    </SC.MenuButton>
                  </li>
                  <li>
                    <SC.MenuButton onClick={handleChangeLanguage(Language.EN)}>
                      <Translation id='lang.english-en' />
                    </SC.MenuButton>
                  </li>
                </SC.Menu>
              </Menu>
            </SC.LanguageMenu>
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
                <SC.Link href='/about'>
                  <Translation id='header.about' />
                </SC.Link>
              </li>
              <li>
                <SC.Link href='/organizations'>
                  <Translation id='header.organizations' />
                </SC.Link>
              </li>
              <li>
                <SC.Link href='/reports'>
                  <Translation id='header.reports' />
                </SC.Link>
              </li>
              <li>
                <SC.Link href='/publishing' external>
                  <Translation id='header.publishing' />
                </SC.Link>
              </li>
              <li>
                <SC.MenuButton
                  onClick={() =>
                    translationsService.changeLanguage(Language.NB)
                  }
                >
                  <Translation id='lang.norwegian-nb' />
                </SC.MenuButton>
              </li>
              <li>
                <SC.MenuButton
                  onClick={() =>
                    translationsService.changeLanguage(Language.NN)
                  }
                >
                  <Translation id='lang.norwegian-nn' />
                </SC.MenuButton>
              </li>
              <li>
                <SC.MenuButton
                  onClick={() =>
                    translationsService.changeLanguage(Language.EN)
                  }
                >
                  <Translation id='lang.english-en' />
                </SC.MenuButton>
              </li>
            </SC.Menu>
          </Menu>
        </SC.DropdownMenu>
      </SC.Row>
    </SC.Header>
  );
};

export default compose<FC>(memo, withTranslations)(Header);
