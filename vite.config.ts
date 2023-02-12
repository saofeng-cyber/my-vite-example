import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vitePluginEslint from 'vite-plugin-eslint';
console.log(`Current directory: ${process.cwd()}`);
// https://vitejs.dev/config/
export default defineConfig({
    root: process.cwd(),
    base: '/',
    plugins: [vue(), vueJsx(), vitePluginEslint()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    envDir: './config/env',
    server: {
        host: true,
    },
});
