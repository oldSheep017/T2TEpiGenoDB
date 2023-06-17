![LOGO](https://young-1306090592.cos.ap-guangzhou.myqcloud.com/cgge/logo.svg)

# T2TEpiGenoDB

## Brief Introduction

"T2TEpiGenoDB", which consolidates and exhibits our genetic and epigenetic analysis results of the new genomic regions derived from the comparative analysis. Within T2TEpiGenoDB, users can retrieve the new regions of each species and their corresponding genetic and epigenetic features, providing vital resources for further biological and disease-related research.

T2TEpiGenoDB provides a convenient platform for researchers to access and analyze new gene regions and their associated genetic and epigenetic characteristics

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
+ purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
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
				replacement: resolve(__dirname, '/src'),
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
