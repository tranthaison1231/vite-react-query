import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import { visualizer } from 'rollup-plugin-visualizer';
import lessToJS from 'less-vars-to-js';

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/configs/theme/theme.less'),
    'utf8',
  ),
);

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: name => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
      {
        find: /^#/,
        replacement: path.resolve(__dirname, 'src'),
      },
      { find: /^~/, replacement: '' },
    ],
  },
  optimizeDeps: {
    include: ['@ant-design/icons', 'antd'],
  },
  build: {
    sourcemap: true,
    outDir: 'build',
    rollupOptions: {
      plugins: [visualizer()],
    },
  },
});
