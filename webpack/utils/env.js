import { join } from 'path';

export const mode = process.env.NODE_ENV ?? 'production';
export const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === 'true';
export const isProd = mode === 'production';
export const isDev = !isProd;
export const rootDir = join(__dirname, '../../');
export const outputPath = join(__dirname, '../../build');
export const webpackDir = join(__dirname, '../');
export const defaultPort = 3001;
export const srcDir = join(__dirname, '../../src');