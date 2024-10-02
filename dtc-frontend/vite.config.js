import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
    build: {
        outDir: 'build',
    },
    plugins: [
        reactRefresh(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5001', 
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
