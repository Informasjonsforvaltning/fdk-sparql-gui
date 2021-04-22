import type { Environment } from './enums';

export interface EnvironmentVariables {
  ENV: Environment;
  SPARQL_API_HOST: string;
  USE_DEMO_LOGO: boolean;
}
