import { validateEnv } from './utils/commons';

import { Environment } from './types/enums';

export default validateEnv(
  (window as any).env ?? {
    ENV: Environment.DEVELOPMENT,
    SPARQL_API_HOST: 'https://www.staging.fellesdatakatalog.digdir.no/sparql',
    USE_DEMO_LOGO: false
  }
);
