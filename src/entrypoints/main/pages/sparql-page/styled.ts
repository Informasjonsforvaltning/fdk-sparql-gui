import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

const SparqlPage = styled.article`
  flex: 1;

  @media (max-width: 1020px) {
    & {
      margin-top: calc(24px + (48 - 24) * ((100vw - 320px) / (1020 - 320)));
    }
  }
`;

const Title = styled.h1`
  margin-bottom: ${theme.spacing('S48')};

  font-size: ${theme.fontSize('FS48')};
  font-weight: ${theme.fontWeight('FW700')};

  @media (max-width: 1020px) {
    & {
      font-size: calc(24px + (48 - 24) * ((100vw - 320px) / (1020 - 320)));
    }
  }
`;

const Yasgui = styled.div`
  margin-top: ${theme.spacing('S48')};
  padding: ${theme.spacing('S24')};
  border-radius: 4px;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export default {
  SparqlPage,
  Title,
  Yasgui
};
