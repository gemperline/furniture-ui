import { join } from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import { rootDir } from '../utils/env';

const config = {
    context: join(rootDir, '/src'),
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    emitError: true,
    emitWarning: true,
    failOnError: true,
};

export const esLintPlugin = new ESLintPlugin(config);