/* eslint-disable @typescript-eslint/naming-convention */

// It helps to set types with autocomplete for NODE_ENV environment variable.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Environment.
      NODE_ENV: 'development' | 'production' | 'test';
      APP_ENV: 'dev' | 'staging' | 'qa';
      DEBUG: string;

      // API.
      API_BASE_URL: string;

      API_FIREBASE_KEY: string;

      // NPM
      npm_package_name: string;
      npm_package_version: string;

      AVATAR_BASE_URI: string;
    }
  }
}

export {};
