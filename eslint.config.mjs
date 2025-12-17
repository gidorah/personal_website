import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescriptEslint from 'eslint-config-next/typescript';

const config = [...coreWebVitals, ...typescriptEslint];

export default config;
