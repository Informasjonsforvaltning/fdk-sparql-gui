import type { Environment } from './enums';

export interface EnvironmentVariables {
  ENV: Environment;
  SPARQL_API_HOST: string;
  FDK_BASE_URI: string;
  FDK_REGISTRATION_BASE_URI: string;
  ADMIN_GUI_BASE_URI: string;
}
