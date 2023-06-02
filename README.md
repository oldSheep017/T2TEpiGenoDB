# CGGE

## Brief Introduction

A database

## Getting Started

### Create Project

```bash
yarn create vite
```

### Install TailwindCss
```bash
yarn add tailwindcss@latest postcss@latest autoprefixer@latest -D
```

```bash
npx tailwindcss init -p
```

```diff
- purge: []
+	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
```

### Add Package

```bash
yarn add vue-router@4
```

## Technology Stack

-   vue
-   tailwindcss
-   vite

## Configuration of Vite

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	resolve: {
		alias: [
			{
				find: '@',
				replacement: {
					find: '@',
					replacement: resolve(__dirname, '/src'),
				},
			},
		],
	},
	plugins: [vue()],
	server: {
		host: 'localhost',
		port: 3000,
	},
})
```
