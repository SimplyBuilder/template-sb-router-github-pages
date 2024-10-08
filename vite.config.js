// vite.config.js
import { defineConfig } from 'vite';

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcssPlugins from "./postcss.config.js"

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: './',
    root: './src',
    build: {
        manifest: false,
        outDir: '../build',
        minify: 'terser',
        target: "esnext",
        terserOptions: {
            mangle: false,
        }
    },
    optimizeDeps: {
        keepNames: true
    },
    css: {
        postcss: postcssPlugins
    },
    publicDir: '../static',
    resolve: {
        alias: {
            '@stores': resolve(__dirname, 'src', 'stores'),
            '@components': resolve(__dirname, 'src', 'components'),
            '@styles': resolve(__dirname, 'src', 'styles'),
        },
    },
    server: {
        cors: false,
        open: false
    },
    plugins: []
});